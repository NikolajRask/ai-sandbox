import React from 'react'
import styles from './sandboxitem.module.scss'

interface SandboxItemProps {
    children: React.ReactNode,

    title: string
}

const SandboxItem = ({
    children,
    title
}: SandboxItemProps) => {
  return (
    <div className={styles.sandboxItem}>
        <div className={styles.sandboxItemTitleContainer}>
            <div className={styles.sandboxItemIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" > <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" /> <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /> <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" /> <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" /> <path d="M17 12h.01" /> <path d="M13 12h.01" /> </svg> 
            </div>
            <h2 className={styles.sandboxItemTitle}>{title}</h2>
        </div>
        {children}
    </div>
  )
}

export default SandboxItem

export const SandboxItemDragger = ({
    ...rest
}: React.ButtonHTMLAttributes<HTMLDivElement>) => {
    return <div {...rest} className={styles.sandboxItemDragger}>
        
    </div>
}