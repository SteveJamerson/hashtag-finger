export interface TabsProps {
   id: string;
   names: string[];
   show?: string;
   active: number;
}

export interface NavTabProps extends TabsProps {
   actived: any;
}
