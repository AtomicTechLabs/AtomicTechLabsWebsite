import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext({ theme: 'light' })

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Always light theme — set once on mount
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.removeItem('atl-theme')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: 'light' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
