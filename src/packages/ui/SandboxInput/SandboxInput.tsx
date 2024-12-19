import React from 'react'
import styles from './sandboxinput.module.scss'
import SandboxItem from '../SandboxItem/SandboxItem'

const SandboxInput = () => {
  return (
    <SandboxItem title='Human Input'>
        <input type="text" className={styles.input}  placeholder="Type something" />
    </SandboxItem>
  )
}

export default SandboxInput