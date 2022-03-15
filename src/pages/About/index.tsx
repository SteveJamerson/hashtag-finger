import React from "react";

import image from '../../assets/about-ilustration.svg'
import linkedin from  '../../assets/icon-awesome-linkedin.svg'
import email from  '../../assets/icon-envelope.svg'
import github from  '../../assets/icon-github.svg'
import photoBruno from '../../assets/photo/brunoAlarcao.jpg'
import photoDanielle from '../../assets/photo/danielleIzawa.jpg'
import photoRafael from '../../assets/photo/rafaelBorges.jpg'
import photoSteve from '../../assets/photo/steveJamerson.jpg'
import { ContainerBottom, Containertop, Container, Card, ContainerCard, ContainerCardIcons, ContainerCardPhoto, ContainerCardSubTitle, ContainerCardText, ContainerText, Image, SubTitle, Text, Title } from "./style"

const About: React.FC = () => {
  return (
   <Container>
      
   <Containertop>
   <ContainerText>
      <Title >Sobre o projeto</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
         aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
         duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
         sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
         ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
         eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
         gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
         eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
         voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
         clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
         amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
         rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
         ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
         magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
         justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
         takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
         sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
         invidunt ut labore et dolore magna aliquyam erat, sedundefined
</Text>

</ContainerText>
      <Image>
      <img src={image} alt="" className="imagem" />
      </Image>
   </Containertop>
      <ContainerBottom>
      <SubTitle>Quem somos</SubTitle>
      <ContainerCard>
         <Card>
            <SubTitle />
            <ContainerCardPhoto>
               <img src={photoBruno} alt="" className="brunoAlarcao" />
            </ContainerCardPhoto>
            <ContainerCardSubTitle>Bruno Alarcão</ContainerCardSubTitle>
            <ContainerCardText>Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, 
                sed diam nonumy eirmod 
            </ContainerCardText>
            <ContainerCardIcons>
            <img src={github} alt="" className="github" />
            <img src={email} alt="" className="email" />
            <img src={linkedin} alt="" className="linkedin" />
            </ContainerCardIcons>
         </Card>
         <Card>
            <SubTitle />
            <ContainerCardPhoto>
               <img src={photoDanielle} alt="" className="danielleizawa" />
            </ContainerCardPhoto>
            <ContainerCardSubTitle>Danielle Izawa</ContainerCardSubTitle>
            <ContainerCardText>Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, 
                sed diam nonumy eirmod 
            </ContainerCardText>
            <ContainerCardIcons>
            <img src={github} alt="" className="github" />
            <img src={email} alt="" className="email" />
            <img src={linkedin} alt="" className="linkedin" />
            </ContainerCardIcons>
         </Card>
         <Card>
            <SubTitle />
            <ContainerCardPhoto>
               <img src={photoRafael} alt="" className="rafaelBorges" />
            </ContainerCardPhoto>
            <ContainerCardSubTitle>Rafael Borges</ContainerCardSubTitle>
            <ContainerCardText>Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, 
                sed diam nonumy eirmod 
            </ContainerCardText>
            <ContainerCardIcons>
            <img src={github} alt="" className="github" />
            <img src={email} alt="" className="email" />
            <img src={linkedin} alt="" className="linkedin" />
            </ContainerCardIcons>
         </Card>
         <Card>
            <SubTitle />
            <ContainerCardPhoto>
               <img src={photoSteve} alt="" className="steveJamerson" />
            </ContainerCardPhoto>
            <ContainerCardSubTitle>Steve Jamerson</ContainerCardSubTitle>
            <ContainerCardText>Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, 
                sed diam nonumy eirmod
            </ContainerCardText>
            <ContainerCardIcons>
            <img src={github} alt="" className="github" />
            <img src={email} alt="" className="email" />
            <img src={linkedin} alt="" className="linkedin" />
            </ContainerCardIcons>
         </Card>
      </ContainerCard>
      </ContainerBottom>   
     
      </Container>
  );
};

export default About;