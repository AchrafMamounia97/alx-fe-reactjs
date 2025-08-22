// Custom hook for authentication
export function useAuth() {
  // Simulated authentication state
  const isAuthenticated = false; // Change to true to simulate logged-in user
  
  return {
    isAuthenticated,
    login: () => console.log('Login functionality'),
    logout: () => console.log('Logout functionality')
  };
}
