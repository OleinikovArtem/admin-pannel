export const setCookie = (name: string, value: string, hoursToLive: number) => {
  // Encode value in order to escape semicolons, commas, and whitespace
  const cookieValue = encodeURIComponent(value)

  // Create the cookie expiration date
  let expires = ''
  if (hoursToLive) {
    const date = new Date()
    date.setTime(date.getTime() + hoursToLive * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }

  // Set the cookie with name, value, and expiration date
  document.cookie = name + '=' + cookieValue + expires + '; path=/; Secure; SameSite=Strict'
}

export const getCookie = (name: string) => {
  const nameString = name + '='

  const value = document.cookie.split('; ').find((row) => {
    return row.startsWith(nameString)
  })

  return value ? decodeURIComponent(value.split('=')[1]) : null
}

export const deleteCookie = (name: string) => {
  // Delete the cookie by setting the expiration date to the past
  document.cookie =
    name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; SameSite=Strict'
}
