import React from "react";
import { Button, Input, Text } from "../../components/atoms";
import { Hero, TabImages } from "./style";
import { Footer, Header, Tab, Tabs, Card } from "../../components/molecules";
import { CardProps } from "../../components/molecules/Card/interface";

const Home = () => {
   const tweets: CardProps[] = [...Array(10).keys()].map((i: number) => {
      return {
         variant: "horizontal",
         title: "Username",
         subtitle: "@twitterusername",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...",
         link: [{ text: "Ver mais no Twitter", href: "#" }],
         image: require(`../../assets/mock/person-${i + 1}.jpg`),
      };
   });

   const images: CardProps[] = [...Array(10).keys()].map((i: number) => {
      return {
         variant: "image",
         title: "Postado por:",
         subtitle: "@twitterusername",
         background: require(`../../assets/mock/paisagem-${(i % 5) + 1}.jpg`),
      };
   });

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
            config={[
               {
                  name: "Imagens",
                  order: 1,
               },
               {
                  name: "Tweets",
                  order: 0,
               },
            ]}
         >
            <Tab order={0}>
               {tweets.map(
                  (
                     { variant, title, subtitle, text, link, image },
                     i: number
                  ) => (
                     <Card
                        key={i}
                        title={title}
                        subtitle={subtitle}
                        text={text}
                        variant={variant}
                        link={link}
                        image={image}
                     />
                  )
               )}
            </Tab>
            <TabImages order={1}>
               {images.map(
                  ({ variant, title, subtitle, background }, i: number) => (
                     <Card
                        key={i}
                        title={title}
                        subtitle={subtitle}
                        variant={variant}
                        background={background}
                     />
                  )
               )}
            </TabImages>
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
