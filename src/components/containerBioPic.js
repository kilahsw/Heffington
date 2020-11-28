import React from 'react'
import containerBioPic from './containerBioPic.module.css'

export default function ContainerBp ({ children }) {
    return <div classname={containerBioPic.containerBp}>{children}</div>
}