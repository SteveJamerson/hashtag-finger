import { InputHTMLAttributes } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
   variations: 'primary' | 'secundary'
   title?: string;
}

export interface ILabel {
   isFilled: boolean;
}