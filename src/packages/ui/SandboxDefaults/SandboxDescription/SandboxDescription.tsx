import React from 'react'
import styles from './sandboxdescription.module.scss'

interface SandboxDescriptionProps {
    children?: React.ReactNode
}

const SandboxDescription = ({
    children
}: SandboxDescriptionProps) => {
  return (
    <p className={styles.description}>
        {children}
    </p>
  )
}

export default SandboxDescription