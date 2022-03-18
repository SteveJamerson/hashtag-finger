import React from "react";
import { TextProps } from "./interface";

import { TextComponent } from "./style";

export const Text: React.FC<TextProps> = ({
   component = "p",
   color = "primary",
   weight,
   align,
   wrap,
   size,
   variant,
   margin,
   ...props
}) => {
   return (
      <TextComponent
         as={component}
         color={color}
         weight={weight}
         align={align}
         wrap={wrap}
         size={size}
         variant={variant}
         margin={margin}
         {...props}
      />
   );
};

export default Text;
