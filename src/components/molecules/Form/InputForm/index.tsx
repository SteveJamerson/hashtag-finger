import React, { useCallback, useRef, useState } from "react";
import { Icon } from "../../../atoms/Icon";
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'

import { TextFieldProps } from "./interface";
import { Component, InputComponent, LabelComponent, Error } from "./style";
import { useEffect } from "react";

export const Input: React.FC<TextFieldProps> = ({
   className,
   variant = "outline",
   size = "medium",
   type = "text",
   id,
   label,
   icon,
   isError,
   helperText,
   disabled,
   value,
   name,
   ...props
}) => {
   const inputRef = useRef<HTMLInputElement>(null);
   const [isField, setIsField] = useState(false);
   const [isFocused, setIsFocused] = useState(false);
   const { fieldName, defaultValue, error, registerField } = useField(name) //o nome do campo, obtenho das propriedades do InputProps

   console.log(error, "input")

   const handleInputFocus = useCallback(() => {
      setIsFocused(true);
   }, []);

   const handleInputBlur = useCallback(() => {
      setIsFocused(false);
      setIsField(!!inputRef.current?.value);
   }, []);

   useEffect(() => {
      registerField({
         name: fieldName,
         ref: inputRef.current, //obtendo o input, parecido com jQuery
         path: 'value', //informando que o valor esta dentro de .value
      })
   }, [fieldName, registerField])

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
               name={name}
               isError={!!error}
               {...props}
            ></InputComponent>

            {error && (
               <Error title={error}>
                  <FiAlertCircle color="#C53030" size={20} />
               </Error>
            )}

            {label && (
               <LabelComponent htmlFor={id} focused={isFocused || isField}>
                  {label}
               </LabelComponent>
            )}
         </Component>
      </>
   );
};

export default Input;
