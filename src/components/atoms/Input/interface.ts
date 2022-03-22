import { IconName } from './../Icon/types';
import { InputHTMLAttributes } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
   variant?: 'outline' | 'fill';
   sizes?: 'small' | 'medium' | 'large';
   type: 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';
   id: string;
   label?: string;
   value?: string | number;
   isError?: boolean;
   helperText?: string;
   disabled?: boolean;
   icon?: IconName;
   key?: React.Key;
}
