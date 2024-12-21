import { Input } from '@/components/ui/input'
import SandboxSelect from '@/packages/ui/SandboxSelect/SandboxSelect'
import React from 'react'
import SandboxLabel from '@/packages/ui/SandboxDefaults/SandboxLabel/Label'
import SandboxItemContent from '@/packages/ui/SandboxDefaults/SandboxItemContent/SandboxItemContent'

const LLMCompletion = () => {
  return (
    <SandboxItemContent>
      <SandboxLabel>LLM Instructions</SandboxLabel>
      <Input placeholder='You are a helpfull assistant'/>
      <SandboxLabel>Model</SandboxLabel>
      <SandboxSelect/>
    </SandboxItemContent>
  )
}

export default LLMCompletion