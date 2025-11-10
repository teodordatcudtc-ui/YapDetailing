'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface HeaderContextType {
  isTopbarVisible: boolean
  setIsTopbarVisible: (visible: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true)

  return (
    <HeaderContext.Provider value={{ isTopbarVisible, setIsTopbarVisible }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeaderContext must be used within HeaderProvider')
  }
  return context
}

