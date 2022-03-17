interface TabsConfig {
   name: string;
   order: number;
}
export interface TabsProps {
   id: string;
   config: TabsConfig[];
   show?: string;
   active: number;
}

export interface NavTabProps extends TabsProps {
   actived: any;
}
