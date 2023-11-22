import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './components/atoms/Atmstyle.scss'
import './components/organisms/Orgstyle.scss'
import './components/templates/Tmpstyle.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
