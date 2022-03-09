import React from 'react';

import { TextComponent } from './style'

/* const Text: React.FC<any>=({component="p", color="primary", ...props }) =>{
  return <TextComponent as={component} {...props} color={color} />
} */

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small"
  color?: "primary" | "second"
  weight?: "light" | "regular" | "medium" | "semi-bold" | "bold" | "extra-bold" | "bolder"
}

const Text: React.FC<TextProps> = ({component="p", color="primary",  weight="regular", ...props }) =>{
  return <TextComponent as={component} color={color} weight={weight} {...props} />
}

export default Text;