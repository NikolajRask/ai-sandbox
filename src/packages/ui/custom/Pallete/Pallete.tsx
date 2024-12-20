import React from 'react'
import styles from './pallete.module.scss'
import { Input } from '@/components/ui/input'
import { BLOCKS } from '@/packages/lib/tools/blocks.constants'

const Pallete = () => {
  return (
    <div className={styles.pallete}>
      <div className={styles.palleteHeader}>
        <Input
          placeholder='Search'
          className={styles.palleteSearch}
        />
      </div>
      <div className={styles.palleteItems} >
        {
          BLOCKS.map((block) => {
            return (
              <div className={styles.palleteItem} key={block.id}>
                <div 
                  className={styles.palleteItemIcon}
                  style={{
                    background: block.gradient
                  }}
                >
                  {block.svg}
                </div>
                <p className={styles.palleteItemText}>{block.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pallete