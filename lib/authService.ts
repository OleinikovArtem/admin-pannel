import { jwtDecode } from 'jwt-decode'
import { deleteCookie, setCookie, getCookie } from './cookieService'
import { TOKENS } from '@/types/auth'

export const login = (tokens: TOKENS) => {
  setTokens(tokens)
}

export const logOut = () => {
  deleteCookie('access_token')
  deleteCookie('refresh_token')
}

// export const getRefreshedAccessToken = async () => {
//   const currentAccessToken = getCookie('access_token')
//   const currentRefreshToken = getCookie('refresh_token')
//   if (!currentAccessToken) return
//
//   const decodedToken = jwtDecode<Token>(currentAccessToken)
//   const isExpired = checkIsExpiredAccessToken(decodedToken.exp)
//
//   if (!isExpired) {
//     return currentAccessToken
//   }
//
//   const { data } = await apolloClientAddition.mutate<REFRESH_TOKEN, REFRESH_TOKEN_VARIABLES>({
//     mutation: refreshToken,
//     variables: {
//       refreshToken: currentRefreshToken
//     }
//   })
//   setTokens(data.refreshToken)
//
//   return data.refreshToken.access_token
// }

function checkIsExpiredAccessToken(exp: number): boolean {
  const expiredDate = new Date(exp * 1000)
  const currentDate = new Date()

  return currentDate >= expiredDate
}

function setTokens(tokens: TOKENS) {
  setCookie('access_token', tokens.access_token, 1)
  setCookie('refresh_token', tokens.refresh_token, 24 * 7)
}
