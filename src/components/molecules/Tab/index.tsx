/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Text } from "../../atoms";
import { NavTabProps } from "./interface";
import { Component, NavComponent, TabComponent } from "./style";

const NavTab: React.FC<NavTabProps> = ({
   id,
   names,
   active,
   children,
   ...props
}) => {
   const trigger = (index: number) => props.actived(index);

   return (
      <NavComponent active={active + 1} {...props}>
         <ul>
            {names?.map((n, i) => (
               <li key={i} onClick={() => trigger(i)}>
                  <Text weight="bold">{n}</Text>
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
   names,
   children,
   ...props
}) => {
   const [activeTab, setActiveTab] = useState(actived);

   const handleActive = (index: number) => setActiveTab(index);

   return (
      <Component {...props}>
         <NavTab
            id={id}
            names={names}
            active={activeTab}
            actived={handleActive}
         />

         {React.Children.map(children, (element, i) => {
            if (activeTab !== i) return;
            return element;
         })}
      </Component>
   );
};
