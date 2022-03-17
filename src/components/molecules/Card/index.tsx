import React from "react";
import { Icon, Text } from "../../atoms";
import { IconName } from "../../atoms/Icon/types";
import { CardProps } from "./interface";

import {
   CardComponent,
   ImageComponent,
   LinksComponent,
   SubtitleComponent,
   TextComponent,
   TitleComponent,
} from "./style";

export const Card: React.FC<CardProps> = ({
   variant = "horizontal",
   image,
   background,
   title,
   subtitle,
   text,
   link,
   ...props
}) => {
   return (
      <CardComponent background={background} variant={variant} {...props}>
         {image && (
            <ImageComponent variant={variant}>
               <img loading="lazy" src={image} alt="" />
            </ImageComponent>
         )}
         {title && (
            <TitleComponent variant={variant}>
               <Text aria-label="title">{title}</Text>
            </TitleComponent>
         )}
         {subtitle && (
            <SubtitleComponent variant={variant}>
               <Text aria-label="subtitle">{subtitle}</Text>
            </SubtitleComponent>
         )}
         {text && (
            <TextComponent variant={variant}>
               <Text aria-label="text">{text}</Text>
            </TextComponent>
         )}
         {link && (
            <LinksComponent variant={variant}>
               {link.map((l) => {
                  return (
                     <a aria-label="link" href={l.href}>
                        {l.text || (
                           <Icon name={l.icon as IconName} size={20}></Icon>
                        )}
                     </a>
                  );
               })}
            </LinksComponent>
         )}
      </CardComponent>
   );
};
