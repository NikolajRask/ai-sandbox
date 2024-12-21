import React from 'react'
import styles from './sandboxinput.module.scss'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import SandboxLabel from '../SandboxDefaults/SandboxLabel/Label'
import SandboxItemContent from '../SandboxDefaults/SandboxItemContent/SandboxItemContent'

const SandboxInput = () => {
  return (
    <SandboxItemContent>
      <SandboxLabel>Input Text</SandboxLabel>
      <Textarea className={styles.input} placeholder="Type something" />
      <Button className={styles.btn}>Run Sequence</Button>
    </SandboxItemContent>
  )
}

export default SandboxInput