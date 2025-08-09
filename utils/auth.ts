// Mock authentication utility functions
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// Mock user data
const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar:
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
}

export const isLoggedIn = (): boolean => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("isLoggedIn") === "true"
  }
  return false
}

export const getCurrentUser = (): User | null => {
  if (typeof window !== "undefined" && isLoggedIn()) {
    const userData = localStorage.getItem("currentUser")
    return userData ? JSON.parse(userData) : mockUser
  }
  return null
}

export const login = (email: string, password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("currentUser", JSON.stringify(mockUser))
      }
      resolve(true)
    }, 1000)
  })
}

export const logout = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("currentUser")
  }
}

export const signup = (
  name: string,
  email: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { ...mockUser, name, email }
      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("currentUser", JSON.stringify(newUser))
      }
      resolve(true)
    }, 1000)
  })
}

export const verifyOTP = (otp: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(otp === "123456") // Mock OTP verification
    }, 1000)
  })
}
