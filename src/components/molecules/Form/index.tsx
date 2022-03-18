import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../atoms";
import { IForm } from "./interface";
import { Container, Title, Button } from "./styles";

export const Form: React.FC<IForm> = (...rest) => {
   return (
      <Container {...rest}>
         <Title>Login</Title>
         <Input label="Usuário" variant="outline" id="user" type="text" />
         <Input label="Senha" variant="outline" id="password" type="password" />
         <Button>Acessar</Button>
      </Container>
   );
};
