/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef, useState } from "react";
import { Icon } from "../Icon";

import { InputFieldProps } from "./interface";
import { Component, InputComponent, LabelComponent } from "./style";

export const Input: React.FC<InputFieldProps> = ({
   className,
   variant = "outline",
   sizes = "medium",
   type = "text",
   id,
   label,
   icon,
   isError,
   helperText,
   disabled,
   value,
   ...props
}) => {
   const inputRef = useRef<HTMLInputElement>(null);
   const [isField, setIsField] = useState(false);
   const [isFocused, setIsFocused] = useState(false);

   const handleInputFocus = useCallback(() => {
      setIsFocused(true);
   }, []);

   const handleInputBlur = useCallback(() => {
      setIsFocused(false);
      setIsField(!!inputRef.current?.value);
   }, []);

   return (
      <>
         <Component variant={variant}>
            {icon && <Icon name={icon}></Icon>}
            <InputComponent
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               type={type}
               id={id}
               disabled={disabled}
               ref={inputRef}
               variant={variant}
               defaultValue={value}
               {...props}
            ></InputComponent>

            {label && (
               <LabelComponent htmlFor={id} focused={isFocused || isField}>
                  {label}
               </LabelComponent>
            )}
         </Component>
      </>
   );
};
