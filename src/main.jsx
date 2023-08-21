import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { MyContextProvider } from './context/contextProvider.jsx'
import awsmobile from './aws-exports.js'
import App from './App.jsx'
import './index.css'

Amplify.configure(awsmobile)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyContextProvider>
            <div className='font-inter'>
                <App />
            </div>
        </MyContextProvider>
    </React.StrictMode>,
)