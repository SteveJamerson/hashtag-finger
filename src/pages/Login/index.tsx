import React from 'react';

import { Text, Button } from "../../components/atoms";
import { Form, Header } from '../../components/molecules'

import { Container } from './styles'


const Login: React.FC = () => {
   return (
      <>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button iconName="home" iconPosition="start" iconSize={10}>
                  HOME
               </Button>
            </div>
         </Header>
         <Container>
            <Form title="Login" />
         </Container>
      </>
   )
};

export default Login