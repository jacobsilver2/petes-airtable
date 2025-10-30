// Basic auth service placeholder
interface User {
  name: string
  email: string
}

// Mock user for now - in a real app this would come from authentication
const mockUser: User = {
  name: "Guest User",
  email: "guest@example.com",
}

export const getUser = (): User => {
  return mockUser
}
