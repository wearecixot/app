'use client'

import axiosPrimitive from "axios"

const instance = axiosPrimitive.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
})

// Check if we're in a browser environment before accessing localStorage
if (typeof window !== 'undefined') {
  const token = localStorage.getItem("token")
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

export default instance