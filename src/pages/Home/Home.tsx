import React from "react";
import { Button } from "../../components/atoms";
import Text from "../../components/atoms/Text";
import { Footer, Header } from "../../components/Molecules";

const Home = () => {
   return (
      <>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button iconName="user" iconPosition="start" iconSize={10}>
                  SOBRE
               </Button>
               <Button
                  iconName="info"
                  iconPosition="start"
                  iconSize={10}
                  color="secondary"
               >
                  LOGIN
               </Button>
            </div>
         </Header>
         <Footer>
            <Text>
               @Cocreare {new Date().getFullYear()}. Todos os direitos
               reservados
            </Text>
         </Footer>
      </>
   );
};

export default Home;
