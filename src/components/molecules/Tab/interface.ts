interface TabsConfig {
   name: string;
   order: number;
}
export interface TabsProps {
   id: string;
   config: TabsConfig[];
   active: number;
   responsive?: boolean;
}

export interface NavTabProps extends TabsProps {
   onActive: any;
}
