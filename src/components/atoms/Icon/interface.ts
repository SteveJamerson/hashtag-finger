import { IconName } from './types'
import { ElementType, HTMLAttributes } from 'react'

export interface IconProps {
   component?: ElementType
   size?: number
   name: IconName
   className?: string
}
