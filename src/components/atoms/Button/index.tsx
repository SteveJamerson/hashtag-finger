import React from "react";
import { Icon } from "../Icon";
import { IconName } from "../Icon/types";
import { ButtonProps } from "./interface";
import { ButtonComponent } from "./style";

export const Button: React.FC<ButtonProps> = ({
   variant = "default",
   color = "primary",
   text,
   type = "button",
   children,
   iconName,
   iconPosition = iconName ? "start" : "",
   iconSize,
   ...props
}) => {
   return (
      <ButtonComponent type={type} color={color} variant={variant} {...props}>
         {iconPosition === "start" && (
            <Icon name={iconName as IconName} size={iconSize} />
         )}
         {text || children}
         {iconPosition === "end" && (
            <Icon name={iconName as IconName} size={iconSize} />
         )}
      </ButtonComponent>
   );
};
