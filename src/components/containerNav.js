import React from 'react'
import containerNav from './containerNav.module.css'

export default function ContainerNav({ children }) {
    return <div className={containerNav.containerN}>{children}</div>
}