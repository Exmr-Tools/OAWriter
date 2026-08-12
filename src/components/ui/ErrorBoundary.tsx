import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('OAWriter error:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex h-screen items-center justify-center bg-red-50 p-8">
          <div className="max-w-2xl rounded-lg border border-red-200 bg-white p-6 shadow">
            <h1 className="mb-2 text-lg font-bold text-red-700">Something went wrong</h1>
            <pre className="overflow-auto rounded bg-red-50 p-3 text-xs text-red-900">
              {this.state.error.message}
              {'\n\n'}
              {this.state.error.stack}
            </pre>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
