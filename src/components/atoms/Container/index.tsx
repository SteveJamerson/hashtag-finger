import React from "react";
import { ContainerProps } from "./interface";

import { ContainerComponent } from "./style";

export const Container: React.FC<ContainerProps> = ({
   container = "default",
   children,
   ...props
}) => {
   return (
      <ContainerComponent container={container} {...props}>
         {children}
      </ContainerComponent>
   );
};
