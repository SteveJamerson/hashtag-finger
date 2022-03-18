/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Text } from "../../atoms";
import { NavTabProps, TabsProps } from "./interface";
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
   const trigger = (index: number) => props.onActive(index);

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

export const Tabs: React.FC<TabsProps | any> = ({
   id,
   active = 0,
   config,
   children,
   responsive,
   ...props
}) => {
   const [activeTab, setActiveTab] = useState(active);

   const handleActive = (index: number) => setActiveTab(index);

   return (
      <>
         <Component {...props} responsive={responsive}>
            {!responsive && (
               <NavTab
                  id={id}
                  config={config}
                  active={activeTab}
                  onActive={handleActive}
               />
            )}

            {React.Children.map(children, (element, i) => {
               if (activeTab === element.props.order || responsive)
                  return element;
            })}
         </Component>
      </>
   );
};
