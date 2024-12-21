import React from 'react'
import styles from './sandboxport.module.scss'

interface SandboxPortProps {
    type: "input" | "output" | "tool"
}
const SandboxPort = ({
    type
}: SandboxPortProps) => {
  return (
    <div 
        className={styles.port}
        style={{
            [type === "output" ? "right" : "left"]: -8,
        }}
    ></div>
  )
}

export default SandboxPort