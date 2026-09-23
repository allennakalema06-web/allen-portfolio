import ThemeToggle from './components/ui/ThemeToggle'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <h1>Allen Nakalema</h1>
      <p>Software Engineer · AI Systems Builder · Founder</p>
    </main>
  )
}

export default App