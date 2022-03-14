export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
   component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
   color?: 'primary' | 'second';
   weight?:
      | 'light'
      | 'regular'
      | 'medium'
      | 'semi-bold'
      | 'bold'
      | 'extra-bold'
      | 'bolder';
   align?: 'left' | 'center' | 'right';
   size?: string;
   wrap?: 'normal' | 'nowrap';
   variant?: 'default' | 'heading' | 'mono';
   margin?: string;
}
