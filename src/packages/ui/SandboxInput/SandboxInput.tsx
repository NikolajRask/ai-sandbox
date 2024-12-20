import React from 'react'
import styles from './sandboxinput.module.scss'
import SandboxItem from '../SandboxItem/SandboxItem'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const SandboxInput = () => {
  return (
    <SandboxItem title='Human Input'>
        <Textarea className={styles.input} placeholder="Type something" />
        <Button className={styles.btn}>Start Sequence</Button>
    </SandboxItem>
  )
}

export default SandboxInput