import { IconName } from './../../../atoms/Icon/types';
import { AnchorHTMLAttributes } from 'react';

export interface TextFieldProps extends AnchorHTMLAttributes<HTMLInputElement> {
   variant?: 'outline' | 'fill';
   size?: 'small' | 'medium' | 'large';
   type: 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';
   id: string;
   label?: string;
   value?: string | number;
   isError?: boolean;
   helperText?: string;
   disabled?: boolean;
   icon?: IconName;
   name: string;
}
