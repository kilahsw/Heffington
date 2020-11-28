import React from 'react'
import containerImg from './containerImg.module.css'

export default function ContainerI ({ children }) {
    return <div className={containerImg.containerI}>{children}</div>
}