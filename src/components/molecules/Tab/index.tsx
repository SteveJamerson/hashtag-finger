/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Children, ReactElement, useState } from "react";
import { Text } from "../../atoms";
import { NavTabProps } from "./interface";
import { Component, NavComponent, TabComponent } from "./style";

const compare = (a: number, b: number) => {
   if (a < b) {
      return -1;
   }
   if (a > b) {
      return 1;
   }
   return 0;
};

const NavTab: React.FC<NavTabProps> = ({
   id,
   config,
   active,
   children,
   ...props
}) => {
   const trigger = (index: number) => props.actived(index);

   return (
      <NavComponent active={active + 1} {...props}>
         <ul>
            {config
               ?.sort((a, b) => compare(a.order, b.order))
               .map((n, i) => (
                  <li key={i} onClick={() => trigger(n.order)}>
                     <Text weight="bold">{n.name}</Text>
                  </li>
               ))}
         </ul>
      </NavComponent>
   );
};

export const Tab: React.FC<any> = ({ id, children, ...props }) => {
   return <TabComponent {...props}>{children}</TabComponent>;
};

export const Tabs: React.FC<any> = ({
   id,
   actived = 0,
   config,
   children,
   ...props
}) => {
   const [activeTab, setActiveTab] = useState(actived);

   const handleActive = (index: number) => setActiveTab(index);

   return (
      <Component {...props}>
         <NavTab
            id={id}
            config={config}
            active={activeTab}
            actived={handleActive}
         />

         {React.Children.map(children, (element, i) => {
            if (activeTab !== element.props.order) return;
            return element;
         })}
      </Component>
   );
};
