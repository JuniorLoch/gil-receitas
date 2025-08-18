'use client'

export const REMEMBER_KEY = 'gil_remember'

export function setRememberFlag(remember: boolean) {
  if (remember) {
    localStorage.setItem(REMEMBER_KEY, '✅')
  } else {
    localStorage.removeItem(REMEMBER_KEY)
  }
}

export function getRememberFlag(): boolean {
  return localStorage.getItem(REMEMBER_KEY) === '✅'
}

export function clearRememberFlag() {
  localStorage.removeItem(REMEMBER_KEY)
}
