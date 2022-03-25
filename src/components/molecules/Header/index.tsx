import React from "react";
import { useNavigate } from "react-router";
import { Text } from "../../atoms";
import { Component } from "./style";

export const Header: React.FC<any> = ({
   component = "header",
   children,
   ...props
}) => {
   const navigate = useNavigate();
   return (
      <Component as={component} {...props}>
         <Text
            component="h2"
            style={{ margin: 0 }}
            onClick={() => navigate("/")}
         >
            hashtag<b>finder</b>
         </Text>
         {children}
      </Component>
   );
};
