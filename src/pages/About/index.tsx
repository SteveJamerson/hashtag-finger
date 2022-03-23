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
      const response = await fetch(
         `${url}&filterByFormula=%7BSquad%7D%20=%20'${environmentAbout.SQUAD}'`,
         {
            headers: headers,
         }
      );
      const data = await response.json();
      /* console.log(data) */
      setAboutText(data.records[0].fields.Sobre);
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
      const response = await fetch(
         `${url}&filterByFormula=%7BSquad%7D%20=%20'${environmentCard.SQUAD}'`,
         {
            headers: headers,
         }
      );
      const data = await response.json();
      /* console.log(data) */

      console.log(data.records);
      setTimeResponse(data.records);
   };

   const navigateToLogin = () => {
      signOut();

      addToast({
         title: "Deslogado com sucesso",
         type: "info",
         description: "Você foi deslogado para acessar a página de Login",
      });
   };

   useEffect(() => {
      const user = localStorage.getItem("@Hashtag-Finger.user");
      if (!user) {
         addToast({
            title: "Usuário não autenticado",
            type: "error",
            description:
               "É necessário a autenticação para navegar para a página Sobre",
         });
         navigate("/");
      }

      loadAbout();
      loadCard();
   }, []);

   return (
      <Container>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button
                  iconName="info"
                  iconPosition="start"
                  iconSize={10}
                  onClick={() => navigate("/")}
               >
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
               {timeResponse.map((person: CardResponse) => (
                  <CardText
                     variant="vertical"
                     title={person.fields.Nome}
                     text={person.fields.Descrição}
                     image={person.fields.Imagem[0].url}
                     link={[
                        { href: person.fields.Github, icon: "github" },
                        { href: person.fields.Email, icon: "envelope" },
                        { href: person.fields.LinkedIn, icon: "linkedin" },
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
