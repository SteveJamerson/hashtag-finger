/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   Button,
   Container,
   Input,
   Skeleton,
   Text,
} from "../../components/atoms";
import {
   HeroContainer,
   TabContainer,
   TabImages,
   TabsCustom,
   TabTweets,
} from "./style";
import { Footer, Header, Card } from "../../components/molecules";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "../../hooks/useToast";
import { postFind } from "../../services/find";
import { getTwitter } from "../../services/twitter";
import { useDebounce } from "../../hooks/useDebounce";

const Home = () => {
   const [loading, setLoading] = useState(false);
   const [tweets, setTweets] = useState<any[]>([]);
   const [images, setImages] = useState<any[]>([]);

   const [search, setSearch] = useState("");

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

   const responsiveTabs = 992;
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

      window.onload = () => {
         setResponsiveTab(window.innerWidth > responsiveTabs);
      };
      window.onresize = () => {
         setResponsiveTab(window.innerWidth > responsiveTabs);
      };
   });

   const handleSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      let { value } = target;
      value = value.replace(/^#/, "");
      target.value = value;
      setSearch(value);
      getSearch(value);
      setLoading(true);
   }, []);

   const getSearch = useDebounce(async (value: string) => {
      if (value) {
         await getTwitter(value).then((res) => {
            const img = res.images.data.data.map((data: any) => {
               data["user"] = res.images.data.includes.users.find(
                  (u: any) => u.id === data.author_id
               );
               data["media"] = res.images.data.includes.media.find(
                  (u: any) => u.media_key === data.attachments.media_keys[0]
               );
               return data;
            });

            const tt = res.tweets.data.data.map((data: any) => {
               data["user"] = res.tweets.data.includes.users.find(
                  (u: any) => u.id === data.author_id
               );
               return data;
            });

            // postFind(value).then((res) => console.log(res));

            setImages(img);
            setTweets(tt);
         });
      }
      setLoading(false);
   }, 2000);

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

         <HeroContainer container="fluid">
            <Container>
               <Text component="h2" variant="heading">
                  Encontre hashtags de maneira fácil.
               </Text>
               <Text>
                  Digite o que deseja no campo de buscas e confira os resultados
                  do Twitter abaixo
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
            </Container>
         </HeroContainer>
         <TabContainer container="fluid">
            <Container>
               <Text size="1.5rem" align="center" margin="0 0 2rem 0">
                  {search &&
                     `Exibindo os 10 resultados mais recentes para #${search}`}
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
                     {!loading
                        ? images.map(({ user, media }, i: number) => (
                             <Card
                                key={i}
                                title={user.name}
                                subtitle={`@${user.username}`}
                                variant="image"
                                background={media.url}
                             />
                          ))
                        : [...Array(10).keys()].map((_) => (
                             <Skeleton height="180px" width="180px" />
                          ))}
                  </TabImages>
                  <TabTweets order={0}>
                     {!loading
                        ? tweets.map(({ user, text }, i: number) => (
                             <Card
                                key={i}
                                title={user.name}
                                subtitle={`@${user.username}`}
                                text={text}
                                variant="horizontal"
                                link={[
                                   {
                                      target: "_blank",
                                      href: `https://twitter.com/search?q=${search}&src=typed_query&f=live`,
                                      text: "Ver mais no Twitter",
                                   },
                                ]}
                                image={user.profile_image_url}
                             />
                          ))
                        : [...Array(10).keys()].map((_) => (
                             <Skeleton height="150px" width="100%" />
                          ))}
                  </TabTweets>
               </TabsCustom>
            </Container>
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
