import React from "react";
import { Component } from "./style";

export const Header: React.FC<any> = ({ component = "header", ...props }) => {
   return <Component as={component} {...props} />;
};
