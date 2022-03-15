import { IconName } from './../Icon/types';
import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant, ButtonTypes, ButtonColors } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: ButtonVariant;
   type?: ButtonTypes;
   text?: string;
   color?: ButtonColors;
   disabled?: boolean;
   iconName?: IconName;
   iconPosition?: 'start' | 'end';
   iconSize?: number;
}
