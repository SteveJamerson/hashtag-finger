import { BoxProps } from './../../atoms/Box/interface';

interface CardLink {
   icon?: string;
   text?: string;
   href: string;
   target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
   variant: 'image' | 'horizontal' | 'vertical';
   image?: string;
   background?: string;
   title?: string;
   subtitle?: string;
   text?: string;
   link?: CardLink[];
}
