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
import { getImages, getTweets } from "../../services/twitter";
import { useDebounce } from "../../hooks/useDebounce";
import { clearCharacter } from "../../utils/clearCharacter";
import { linkInText } from "../../utils/linkInText";
import imageNotFound from "../../assets/images/not-found.png";

const Home = () => {
   const [loading, setLoading] = useState(false);
   const [tweets, setTweets] = useState<any[]>([]);
   const [images, setImages] = useState<any[]>([]);

   const [search, setSearch] = useState("");

   const { signOut } = useAuth();
   const { addToast } = useToast();
   const navigate = useNavigate();

   const user = localStorage.getItem("@Hashtag-Finger.user");

   const navigateToLogin = () => {
      if (user) {
         signOut();
         addToast({
            title: "Deslogado com sucesso",
            type: "info",
            description: "Você foi deslogado para acessar a página de Login",
         });
      }
      navigate("/login");
   };

   const pixelBreakTabs = 992;
   const [pixelBreakTab, setPixelBreakTabs] = useState(!!pixelBreakTabs);
   useEffect(() => {
      window.onload = () => {
         setPixelBreakTabs(window.innerWidth > pixelBreakTabs);
      };
      window.onresize = () => {
         setPixelBreakTabs(window.innerWidth > pixelBreakTabs);
      };
   });

   const handleSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      let value = clearCharacter(target.value || "");
      target.value = value;

      setLoading(value !== "");
      setImages([]);
      setTweets([]);
      setSearch(value);
      getSearch(value);
   }, []);

   const getSearch = useDebounce((value: string) => {
      if (value) {
         const _images = getImages(value)
            .then((response) => {
               return response.data.data.map((data: any) => {
                  data["user"] = response.data.includes.users.find(
                     (u: any) => u.id === data.author_id
                  );
                  data["media"] = response.data.includes.media.find(
                     (u: any) => u.media_key === data.attachments.media_keys[0]
                  );
                  return data;
               });
            })
            .then((data) => setImages(data));

         const _tweets = getTweets(value)
            .then((response) => {
               return response.data.data.map((data: any) => {
                  data["user"] = response.data.includes.users.find(
                     (u: any) => u.id === data.author_id
                  );
                  return data;
               });
            })
            .then((data) => setTweets(data));

         Promise.all([_images, _tweets])
            .catch((e) => {
               setSearch("");
               setImages([]);
               setTweets([]);
               console.log(e, tweets, images);
            })
            .finally(() => {
               postFind(value);
               setLoading(false);
            });
      }
   }, 2000);

   return (
      <>
         <Header component="nav">
            <div>
               <Button
                  iconName="info"
                  iconPosition="start"
                  iconSize={10}
                  onClick={() => navigate("/about")}
               >
                  SOBRE
               </Button>
               <Button
                  iconName={user ? "power" : "user"}
                  iconPosition="start"
                  iconSize={10}
                  color="secondary"
                  onClick={navigateToLogin}
               >
                  {user ? "SAIR" : "LOGIN"}
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
                  {!search && !(images.length && tweets.length)
                     ? `Nenhum resultado encontrado`
                     : `Exibindo os 10 resultados mais recentes para #${search}`}
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
                  responsive={pixelBreakTab}
               >
                  <TabImages order={1}>
                     {!loading
                        ? images.map(({ user, media }, i: number) => (
                             <Card
                                key={i}
                                title={user.name}
                                subtitle={`@${user.username}`}
                                variant="image"
                                background={
                                   media.url ||
                                   media.preview_image_url ||
                                   imageNotFound
                                }
                             />
                          ))
                        : [...Array(10).keys()].map((_) => (
                             <Skeleton height="180px" width="180px" />
                          ))}
                  </TabImages>
                  <TabTweets order={0}>
                     {!loading
                        ? tweets.map(({ user, text, id }, i: number) => (
                             <Card
                                key={i}
                                title={user.name}
                                subtitle={`@${user.username}`}
                                text={linkInText(text)}
                                variant="horizontal"
                                link={[
                                   {
                                      target: "_blank",
                                      href: `https://twitter.com/${clearCharacter(
                                         user.username
                                      )}/status/${id}`,
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
