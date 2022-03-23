export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
   component?: 'div' | 'form' | 'section';
   border?: string;
   radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'pill' | 'circle';
   margin?: string;
   padding?: string;
   background?: string;
   height?: string;
   width?: string;
}
