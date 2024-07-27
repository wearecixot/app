import axiosPrimitive from "axios"

const instance = axiosPrimitive.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
    ...(localStorage.getItem("token") && {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  },
})

export default instance
