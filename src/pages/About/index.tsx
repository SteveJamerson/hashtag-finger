import React, { useEffect, useState } from "react";

import image from '../../assets/about-ilustration.svg'
import linkedin from  '../../assets/icon-awesome-linkedin.svg'
import email from  '../../assets/icon-envelope.svg'
import github from  '../../assets/icon-github.svg'
import Home from "../Home/Home";
import { CardResponse } from "./interfaces";
import { Card, Container, ContainerBottom, ContainerCard, ContainerCardIcons, ContainerCardPhoto, ContainerCardSubTitle, ContainerCardText, ContainerText, Containertop, Image, SubTitle, Text, Title } from "./style"

const About: React.FC = () => {
   const [aboutText, setAboutText] = useState('')
   const [timeResponse, setTimeResponse] = useState<CardResponse[]>([])
   const loadAbout = async() => {
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
       const response = await fetch(`${url}&filterByFormula=%7BSquad%7D%20=%20'${environmentAbout.SQUAD}'`, {
         headers: headers,
      })
      const data = await response.json()
      /* console.log(data) */
      setAboutText(data.records[0].fields.Sobre)
   }
  
   
   const loadCard = async() => {
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
       const response = await fetch(`${url}&filterByFormula=%7BSquad%7D%20=%20'${environmentCard.SQUAD}'`, {
         headers: headers,
      })
      const data = await response.json()
      /* console.log(data) */
      
      
      
      console.log(data.records)
      setTimeResponse(data.records)
   }

   useEffect(() =>{  
      loadAbout();
      loadCard();
   },[])

  return (
   <Container>
      <Home />
   <Containertop>
   <ContainerText>
      <Title >Sobre o projeto</Title>
      <Text>{aboutText}
</Text>

</ContainerText>
      <Image>
      <img src={image} alt="" className="imagem" />
      </Image>
   </Containertop>
      <ContainerBottom>
      <SubTitle>Quem somos</SubTitle>
      <ContainerCard>
         {timeResponse.map((person:CardResponse) =>(
            <Card key={person?.fields?.Nome}>
            <ContainerCardPhoto >
               <img src={person?.fields?.Imagem[0]?.url || ''} />         
            </ ContainerCardPhoto>
            <ContainerCardSubTitle>{person?.fields?.Nome}</ContainerCardSubTitle>
            <ContainerCardText>{person?.fields?.Descrição}</ContainerCardText>
            <ContainerCardIcons>
               <a href={person?.fields?.Github} >
                  <img src={github} alt="" className="github"/> 
               </a>
               <a href={person?.fields?.Email}>
                  <img src={email} alt="" className="email" />
               </a>
               <a href={person?.fields?.LinkedIn}>
                   <img src={linkedin} alt="" className="linkedin" />
               </a>
            </ContainerCardIcons>
            <ContainerCard />
         </Card>
         ))}
        </ContainerCard>
      </ContainerBottom>   
     
      </Container>
  );
};

export default About;