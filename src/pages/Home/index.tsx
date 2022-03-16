import React from "react";
import { Button, Input, Text } from "../../components/atoms";
import { Hero } from "./style";
import { Footer, Header, Tab, Tabs } from "../../components/molecules";

const Home = () => {
   return (
      <>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button iconName="info" iconPosition="start" iconSize={10}>
                  SOBRE
               </Button>
               <Button
                  iconName="user"
                  iconPosition="start"
                  iconSize={10}
                  color="secondary"
               >
                  LOGIN
               </Button>
            </div>
         </Header>
         <Hero>
            <Text component="h2" variant="heading">
               Encontre hashtags de maneira fácil.
            </Text>
            <Text>
               Digite o que deseja no campo de buscas e confira os resultados do
               Twitter abaixo
            </Text>
            <Input
               type="text"
               id="search"
               variant="fill"
               icon="search"
               placeholder="Buscar..."
            />
         </Hero>
         <Tabs
            style={{ background: "#0A1744" }}
            id="tab"
            names={["Tweets", "Imagens"]}
         >
            <Tab>TWEETS</Tab>
            <Tab>IMAGES</Tab>
         </Tabs>
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
