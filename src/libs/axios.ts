'use client'

import axiosPrimitive from "axios"
import { parseCookies} from "nookies"

const instance = axiosPrimitive.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    ...(parseCookies().token && { Authorization: `Bearer ${parseCookies().token}` })
  },
})

export default instance