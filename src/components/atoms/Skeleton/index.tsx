import React from "react";
import { SkeletonProps } from "./interface";

import { SkeletonComponent } from "./style";

export const Skeleton: React.FC<SkeletonProps> = ({ children, ...props }) => {
   return <SkeletonComponent {...props}>{children}</SkeletonComponent>;
};
