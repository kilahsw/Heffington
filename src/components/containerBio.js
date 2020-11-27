import React from 'react'
import containerStyles from './containerBio.module.css'

export default function Container({ children }) {
    return <div className={containerStyles.container}>{children}</div>
}
