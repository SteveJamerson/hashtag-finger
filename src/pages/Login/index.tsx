import React, { useEffect } from "react";

import { Text, Button } from "../../components/atoms";
import { Form, Header } from "../../components/molecules";
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useToast } from "../../hooks/useToast";

const Login: React.FC = () => {

   const { user } = useAuth()
   const navigate = useNavigate()
   const { addToast } = useToast()

   const onClickHome = () => {

      if (Object.keys(user).length === 0) {
         addToast({
            title: 'Usuário não autenticado',
            type: 'error',
            description: 'É necessário a autenticação para navegar para a página Home'
         })

      } else {
         navigate('/home')
      }
   }

   useEffect(() => {
      let user = localStorage.getItem('@Hashtag-Finger.user')

      if (user) {
         navigate('/')
      }
   }, [])

   return (
      <>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button onClick={onClickHome}>
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
