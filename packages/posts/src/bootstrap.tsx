import ReactDOM from 'react-dom/client'
import { App } from './App'

const isDevelopment = process.env.NODE_ENV === 'development'

const mount = (el: Element) => {
  ReactDOM.createRoot(el).render(<App />)
}

if (isDevelopment) {
  const root = document.querySelector('#root')

  if (!root) {
    throw new Error('root element was not found')
  }

  mount(root)
}

export { mount }
