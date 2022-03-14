import React from 'react';

import * as Molecules from '../../Components/Molecules'
import { Container, Header } from './styles'


const Login: React.FC = () => {
   return (
      <Container>
         <Molecules.Form title="Login" />
      </Container>
   )
};

export default Login