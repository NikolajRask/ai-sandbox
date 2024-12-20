import React from 'react'
import { Select } from '@/components/ui/select'
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { OPENAI_MODELS } from '@/packages/lib/openai/models.constants'
import styles from './sandboxselect.module.scss'

const SandboxSelect = () => {
  return (
    <Select>
        <SelectTrigger className={styles.select}>
            <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
            <SelectLabel>Models</SelectLabel>
            {Object.entries(OPENAI_MODELS).map(([_key, model], index) => {
                return (
                  <SelectItem
                      key={index}
                      value={model.name}

                  >
                    {model.name}
                  </SelectItem>
                )
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SandboxSelect