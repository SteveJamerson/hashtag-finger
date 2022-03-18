import React, { useEffect, useState } from "react";

import { Text, Button } from "../../components/atoms";
import { Form, Header } from "../../components/molecules";
import api from "../../services/api";
import IUsers from '../../models/Users'
import { useAuth } from '../../hooks/useAuth';


import { Container } from "./styles";

const Login: React.FC = () => {

   const { getUsers } = useAuth()

   useEffect(() => {
      getUsers()
      console.log("execued getuser")
   }, [])

   return (
      <>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button iconName={undefined} iconPosition="start" iconSize={10}>
                  HOME
               </Button>
            </div>
         </Header>
         <Container>
            <Form title="Login" />
         </Container>
      </>
   );
};

export default Login;
