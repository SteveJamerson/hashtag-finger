import React from "react";
import { Component } from "./style";

const Header: React.FC<any> = ({ component = "header", ...props }) => {
   return <Component as={component} {...props} />;
};

export default Header;
