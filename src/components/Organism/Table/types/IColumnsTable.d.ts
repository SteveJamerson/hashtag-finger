export default interface IColumnsTable {
   key: string;
   value: string;
   hasOrdering?: boolean;
   align?: 'center' | 'left' | 'right';
   size?: 'S' | 'M' | 'L' | 'XL';
 }
