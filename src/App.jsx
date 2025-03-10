import { ClerkProvider } from '@clerk/clerk-react'
import './App.css'
import Landing from './components/Landing'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Landing />
    </ClerkProvider>
  )
}

export default App
