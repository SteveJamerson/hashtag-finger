import React from "react";
import { BoxProps } from "./interface";

import { BoxComponent } from "./style";

export const Box: React.FC<BoxProps> = ({
   component = "div",
   border,
   radius,
   margin,
   padding,
   background,
   children,
   ...props
}) => {
   return (
      <BoxComponent
         as={component}
         background={background}
         border={border}
         radius={radius}
         margin={margin}
         padding={padding}
         {...props}
      >
         {children}
      </BoxComponent>
   );
};
