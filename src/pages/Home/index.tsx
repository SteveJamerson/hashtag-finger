/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Text } from "../../components/atoms";
import { Hero, TabContainer, TabImages, TabsCustom, TabTweets } from "./style";
import { Footer, Header, Card } from "../../components/molecules";
import { CardProps } from "../../components/molecules/Card/interface";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "../../hooks/useToast";
import { postFind } from "../../services/find";
import { useDebounce } from "../../hooks/useDebounce";

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

   const { signOut } = useAuth();
   const { addToast } = useToast();
   const navigate = useNavigate();

   const navigateToLogin = () => {
      signOut();

      addToast({
         title: "Deslogado com sucesso",
         type: "info",
         description: "Você foi deslogado para acessar a página de Login",
      });
   };

   const responsiveTabs = 767;
   const [responsiveTab, setResponsiveTab] = useState(!!responsiveTabs);
   useEffect(() => {
      const user = localStorage.getItem("@Hashtag-Finger.user");

      if (!user) {
         addToast({
            title: "Usuário não autenticado",
            type: "error",
            description:
               "É necessário a autenticação para navegar para a página Home",
         });
         navigate("/");
      }

      window.onresize = () => {
         setResponsiveTab(window.innerWidth > responsiveTabs);
      };
   });

   const handleSearch = useCallback(
      useDebounce((e: React.FormEvent<HTMLInputElement>) => {
         e.preventDefault();
         const target = e.target as HTMLInputElement;
         let { value } = target;
         value = value.replace(/^#/, "");

         target.value = value;

         value && postFind(value).then((res) => console.log(res));
      }),
      []
   );

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
                  onClick={navigateToLogin}
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
               maxLength={140}
               onChange={handleSearch}
            />
         </Hero>
         <TabContainer>
            <Text size="1.5rem" align="center" margin="0 0 2rem 0">
               Exibindo os 10 resultados mais recentes para #natureza
            </Text>
            <TabsCustom
               active={0}
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
               responsive={responsiveTab}
            >
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
               <TabTweets order={0}>
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
               </TabTweets>
            </TabsCustom>
         </TabContainer>
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
