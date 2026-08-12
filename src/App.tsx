import { AppLayout } from '@/components/layout/AppLayout'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import './index.css'

function App() {
  return (
    <ErrorBoundary>
      <AppLayout />
    </ErrorBoundary>
  )
}

export default App
