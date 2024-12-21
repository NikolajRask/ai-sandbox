import { Input } from '@/components/ui/input'
import SandboxDescription from '@/packages/ui/SandboxDefaults/SandboxDescription/SandboxDescription'
import SandboxItemContent from '@/packages/ui/SandboxDefaults/SandboxItemContent/SandboxItemContent'
import SandboxLabel from '@/packages/ui/SandboxDefaults/SandboxLabel/Label'
import SandboxPort from '@/packages/ui/SandboxDefaults/SandboxPort/SandboxPort'
import React from 'react'

const WebSearchAPI = () => {
  return (
    <SandboxItemContent>
        <SandboxPort type="input"/>
        <SandboxLabel>Results Limit</SandboxLabel>
        <Input placeholder="Eg. 100" />
        <SandboxDescription>
            This block can be used by other blocks to access web search.
        </SandboxDescription>
    </SandboxItemContent>
  )
}

export default WebSearchAPI