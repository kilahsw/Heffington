import React from 'react'
import containerNav from '../css/containerNav.module.css'

export default function ContainerNav({ children }) {
    return (
    <div className={containerNav.containerN}>{children}
    
    </div>
    )
}