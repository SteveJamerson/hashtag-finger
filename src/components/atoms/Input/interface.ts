import { IconName } from './../Icon/types';
import { AnchorHTMLAttributes } from 'react';

export interface TextFieldProps extends AnchorHTMLAttributes<HTMLInputElement> {
   variant?: 'outline' | 'fill';
   size?: 'small' | 'medium' | 'large';
   type: 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';
   id: string;
   label?: string;
   value?: string | number;
   error?: boolean;
   helperText?: string;
   disabled?: boolean;
   icon?: IconName;
}
