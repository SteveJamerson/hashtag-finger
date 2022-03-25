import React from "react";
import { Icon, Text } from "../../atoms";
import { IconName } from "../../atoms/Icon/types";
import { CardProps } from "./interface";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
   CardComponent,
   ImageComponent,
   LinksComponent,
   SubtitleComponent,
   TextComponent,
   TitleComponent,
   BackgroundComponent,
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
      <CardComponent variant={variant} {...props}>
         {image && (
            <ImageComponent variant={variant}>
               <Zoom zoomMargin={30}>
                  <img loading="lazy" src={image} alt="" />
               </Zoom>
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
               <Text
                  aria-label="text"
                  dangerouslySetInnerHTML={{ __html: text }}
               />
            </TextComponent>
         )}
         {link && (
            <LinksComponent variant={variant}>
               {link.map((l) => {
                  return (
                     <a aria-label="link" href={l.href} target={l.target}>
                        {l.text || (
                           <Icon name={l.icon as IconName} size={20}></Icon>
                        )}
                     </a>
                  );
               })}
            </LinksComponent>
         )}

         {background && (
            <BackgroundComponent variant={variant}>
               <Zoom
                  zoomMargin={40}
                  overlayBgColorStart="#00236B60"
                  overlayBgColorEnd="#00236B60"
               >
                  <img loading="lazy" src={background} alt="" />
               </Zoom>
            </BackgroundComponent>
         )}
      </CardComponent>
   );
};
