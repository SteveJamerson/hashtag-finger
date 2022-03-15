import React from "react";

import image from "../../assets/about-ilustration.svg";
import linkedin from "../../assets/icon-awesome-linkedin.svg";
import email from "../../assets/icon-envelope.svg";
import github from "../../assets/icon-github.svg";
import photoBruno from "../../assets/photo/brunoAlarcao.jpg";
import photoDanielle from "../../assets/photo/danielleIzawa.jpg";
import photoRafael from "../../assets/photo/rafaelBorges.jpg";
import photoSteve from "../../assets/photo/steveJamerson.jpg";
import { Button, Text } from "../../components/atoms";
import { Footer, Header } from "../../components/molecules";
import {
   Card,
   Container,
   ContainerBottom,
   ContainerCard,
   ContainerCardIcons,
   ContainerCardPhoto,
   ContainerCardSubTitle,
   ContainerCardText,
   ContainerText,
   Containertop,
   Image,
   SubTitle,
   // Text,
   Title,
} from "./style";

const About: React.FC = () => {
   return (
      <Container>
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
         <Containertop>
            <ContainerText>
               <Title>Sobre o projeto</Title>
               <Text component="h2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sedundefined
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
                  <ContainerCardText>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
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
                     <img
                        src={photoDanielle}
                        alt=""
                        className="danielleizawa"
                     />
                  </ContainerCardPhoto>
                  <ContainerCardSubTitle>Danielle Izawa</ContainerCardSubTitle>
                  <ContainerCardText>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
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
                  <ContainerCardText>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
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
                  <ContainerCardText>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
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
