import React from "react";
import { IconProps } from "./interface";
import { Component } from "./style";
import IconsTypes from "./types";

export const Icon: React.FC<IconProps> = ({
   name,
   size = 16,
   className,
   ...props
}) => {
   const Icon = IconsTypes[name] as any;
   return <Component as={Icon} width={size} height={size} {...props} />;
};
