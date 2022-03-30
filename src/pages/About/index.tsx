import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assets/about-ilustration.svg";
import { Button, Text } from "../../components/atoms";
import { Card as CardText, Footer, Header } from "../../components/molecules";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "../../hooks/useToast";
import { CardResponse } from "./interfaces";
import {
   Container,
   ContainerBottom,
   ContainerCard,
   ContainerText,
   Containertop,
   Image,
   SubTitle,
   TextContent,
   Title,
} from "./style";

const About: React.FC = () => {
   const { signOut } = useAuth();
   const { addToast } = useToast();
   const navigate = useNavigate();

   const [aboutText, setAboutText] = useState("");
   const [timeResponse, setTimeResponse] = useState<CardResponse[]>([]);
   const loadAbout = async () => {
      const environmentAbout = {
         PATH: "https://api.airtable.com/v0",
         AUTH: "Bearer key2CwkHb0CKumjuM",
         KEY: "app6wQWfM6eJngkD4",
         SQUAD: "zappts_2",
      };

      const url = `${environmentAbout.PATH}/${environmentAbout.KEY}/Projeto?maxRecords=3&view=Grid%20view`;
      const headers = new Headers({
         Authorization: environmentAbout.AUTH,
         "Content-Type": "application/json",
      });
      await fetch(
         `${url}&filterByFormula=%7BSquad%7D%20=%20'${environmentAbout.SQUAD}'`,
         {
            headers: headers,
         }
      )
         .then((response) => response.json())
         .then((data) => setAboutText(data.records[0].fields.Sobre))
         .catch((error) => {
            addToast({
               title: "Desculpa volte mais tarde",
               type: "error",
               description: "Não foi possível retornar o texto",
            });
         });
   };

   const loadCard = async () => {
      const environmentCard = {
         PATH: "https://api.airtable.com/v0",
         AUTH: "Bearer key2CwkHb0CKumjuM",
         KEY: "app6wQWfM6eJngkD4",
         SQUAD: "zappts_2",
      };

      const url = `${environmentCard.PATH}/${environmentCard.KEY}/Equipe?view=Grid%20view`;
      const headers = new Headers({
         Authorization: environmentCard.AUTH,
         "Content-Type": "application/json",
      });
      await fetch(
         `${url}&filterByFormula=%7BSquad%7D%20=%20'${environmentCard.SQUAD}'`,
         {
            headers: headers,
         }
      )
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
         })
         .then((data) => setTimeResponse(data.records))
         .catch((error) => {
            addToast({
               title: "Desculpa volte mais tarde",
               type: "error",
               description: "Não foi possível carregar os cards",
            });
         });
   };

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

   useEffect(() => {
      loadAbout();
      loadCard();
   }, []);

   return (
      <Container>
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
         <Containertop>
            <ContainerText>
               <Title>Sobre o projeto</Title>
               <TextContent>{aboutText}</TextContent>
            </ContainerText>
            <Image>
               <img src={image} alt="" className="imagem" />
            </Image>
         </Containertop>
         <ContainerBottom>
            <SubTitle>Quem somos</SubTitle>
            <ContainerCard>
               {timeResponse?.map((person: CardResponse) => (
                  <CardText
                     variant="vertical"
                     title={person.fields.Nome}
                     text={person.fields.Descrição}
                     image={person.fields.Imagem[0].url}
                     link={[
                        {
                           href: person.fields.Github,
                           icon: "github",
                           target: "_blank",
                        },
                        {
                           href: person.fields.Email,
                           icon: "envelope",
                           target: "_blank",
                        },
                        {
                           href: person.fields.LinkedIn,
                           icon: "linkedin",
                           target: "_blank",
                        },
                     ]}
                  />
               ))}
            </ContainerCard>
         </ContainerBottom>
         <Footer>
            <Text>
               @Cocreare {new Date().getFullYear()}. Todos os direitos
               reservados
            </Text>
         </Footer>
      </Container>
   );
};

export default About;
