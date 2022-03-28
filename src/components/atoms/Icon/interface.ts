import { IconName } from './types';
import { ElementType } from 'react';

export interface IconProps {
   component?: ElementType;
   size?: number;
   name: IconName;
   className?: string;
}
