import ReactDOM from 'react-dom/client'
import App from './app'

const root = document.querySelector('#root')

if (!root) {
    throw new Error('root element was not found')
}

ReactDOM.createRoot(root).render(<App />)
