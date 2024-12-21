import React from 'react'
import styles from './label.module.scss'

interface SandboxLabelProps {
    children?: React.ReactNode
}

const SandboxLabel = ({
    children
}: SandboxLabelProps) => {
  return (
    <p className={styles.label}>{children}</p>
  )
}

export default SandboxLabel