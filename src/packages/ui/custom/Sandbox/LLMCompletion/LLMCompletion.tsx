import { Input } from '@/components/ui/input'
import SandboxItem from '@/packages/ui/SandboxItem/SandboxItem'
import SandboxSelect from '@/packages/ui/SandboxSelect/SandboxSelect'
import React from 'react'
import styles from './llmcompletion.module.scss'

const LLMCompletion = () => {
  return (
    <SandboxItem title='LLM Chat Completion'>
        <p className={styles.label}>LLM Instructions</p>
        <Input placeholder='You are a helpfull assistant'/>
        <p className={styles.label}>Model</p>
        <SandboxSelect/>
    </SandboxItem>
  )
}

export default LLMCompletion