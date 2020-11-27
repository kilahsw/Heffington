import React from 'react'
import containerQuote from './containerQuote.module.css'

export default function ContainerQ ({ children }) {
    return <div className={containerQuote.containerQ}>{children}</div>
}
//.containerQ is the class name. must match style sheet