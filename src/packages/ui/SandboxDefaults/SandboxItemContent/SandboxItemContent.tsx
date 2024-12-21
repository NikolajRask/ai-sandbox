import React from 'react'
import styles from './sandboxitemcontent.module.scss'

interface SandboxItemContentProps {
    children?: React.ReactNode
}

const SandboxItemContent = ({
    children
}: SandboxItemContentProps) => {
  return (
    <div className={styles.content}>
        {children}
    </div>
  )
}

export default SandboxItemContent