import { jwtDecode } from 'jwt-decode'

import { Token, TOKENS } from '@/types/auth'
import { API_URL_GRAPHQL } from '@/constants/urls'

import { deleteCookie, setCookie, getCookie } from './cookieService'

export const login = (tokens: TOKENS) => {
  setTokens(tokens)
}

export const isAuthCheck = async () => {
  const token = await getRefreshedAccessToken()
  return Boolean(token)
}

export const logOut = () => {
  deleteCookie('access_token')
  deleteCookie('refresh_token')
}

export const getRefreshedAccessToken = async () => {
  const currentAccessToken = getCookie('access_token')
  const currentRefreshToken = getCookie('refresh_token')

  const decodedToken = currentAccessToken ? jwtDecode<Token>(currentAccessToken) : null
  const isExpired = decodedToken ? checkIsExpiredAccessToken(decodedToken.exp) : true

  if (!isExpired) {
    return currentAccessToken
  }

  if (!currentRefreshToken) return

  const result = await fetchTokensByRefreshToken(currentRefreshToken)

  if (result?.data.refreshToken) setTokens(result?.data.refreshToken)

  return result?.data.refreshToken.access_token
}

function checkIsExpiredAccessToken(exp: number): boolean {
  const expiredDate = new Date(exp * 1000)
  const currentDate = new Date()

  return currentDate >= expiredDate
}

function setTokens(tokens: TOKENS) {
  setCookie('access_token', tokens.access_token, 1)
  setCookie('refresh_token', tokens.refresh_token, 24 * 7)
}

async function fetchTokensByRefreshToken(refreshToken: string) {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"query":"mutation refreshToken($refreshToken: String!) {refreshToken(refreshToken: $refreshToken) {access_token refresh_token}}","operationName":"refreshToken","variables":{"refreshToken":"${refreshToken}"}}`,
    }

    const response = await fetch(API_URL_GRAPHQL, options)
    const json: { data: { refreshToken: TOKENS } } = await response.json()

    return json
  } catch (error) {
    console.error('fetchTokensByRefreshToken', error)
  }
}
