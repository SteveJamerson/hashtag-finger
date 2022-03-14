import styled from 'styled-components'
import image from '../../assets/about-hero-bg.jpg'

export const Container = styled.div`
   background: transparent url(${image}) 100% 100% no-repeat padding-box;
   background-size: cover;
`
export const Containertop = styled.div`
   display: flex;
   flex-direction: row;
   /* background: transparent url(${image}) 100% 100% no-repeat padding-box; */
   background: transparent linear-gradient(180deg, #0a174400 0%, #0a1744 100%)
      0% 0% no-repeat padding-box;
   justify-content: space-around;
   background-size: cover;

   @media (max-width: 996px) {
      flex-direction: column;
   }
`

export const ContainerText = styled.div`
   width: 40%;
   opacity: 1;
   
   @media (max-width: 996px) {
      width: 90%;
      text-align: start;
      padding-left: 5%;
   }
`
export const Title = styled.h1`
   display: flex;
   color: white;
   font-size: 82px;
   background: transparent;
   text-align: left;
   margin: 0;
   font-weight: bolder;
   margin-top: 133px;
   
   @media (max-width: 996px) {
      font-size: 33px;
   }

`
export const Text = styled.h2`
   color: #d9d9d9;
   font-size: 21px;
   margin-top: 40px;
   
   @media (max-width: 996px) {
      font-size: 15px;
   }

`

export const Image = styled.div`
   width: 40%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: -80px;

   @media (max-width: 996px) {
      width: 100%;
      margin-top: 60px;
   }
`
export const SubTitle = styled.h2`
   font-weight: bolder;
   font-size: 54px;
   color: white;
   padding: 1% 10%;

   @media (max-width: 996px) {
      font-size: 27px;
   }
`

export const ContainerBottom = styled.div`
   display: flex;
   flex-direction: column;
   background: #0a1744 0% 0% no-repeat padding-box;
   height: 100vh;
  
   @media (max-width: 996px) {
      /* width: 100%; */
   }
`

export const ContainerCard = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   height: 480px;
   text-align: center;
   justify-content: space-between;
   padding: 1% 10%;

   background: rgba(10, 23, 68, 1) 0% 0% no-repeat padding-box;
   opacity: 1;

   img {
      width: 178px;
      height: 178px;
      border-radius: 50%;
      padding: 0px 0px;
      margin-top: -50px;
   }

   @media (max-width: 996px) {
      flex-direction: column;
   }
`

export const Card = styled.div`
   width: 23%;
   height: 55vh;
   display: flex;
   border: 1px solid #ffffff24;
   flex-direction: column;
   border-radius: 10px;
   background: rgba(11, 26, 73, 1) 0% 0% no-repeat padding-box;
   box-shadow: 0px 5px 10px rgba(85, 56, 238, 0.08);
   align-items: center;

   @media (max-width: 996px) {
      width: 100%;
   }
`
export const ContainerCardPhoto = styled.div`
   background: transparent 0% 0% no-repeat padding-box;
   opacity: 1;
`
export const ContainerCardSubTitle = styled.div`
   color: rgba(114, 239, 219, 1);
   font-size: 28px;
   font-weight: bolder;
   margin-top: 10px;
`
export const ContainerCardText = styled.div`
   display: flex;
   font-size: 19px;
   color: #d9d9d9;
   padding: 20px;
   margin-top: 0px;
`
export const ContainerCardIcons = styled.div`
   width: 137px;
   display: flex;
   flex-direction: row;
   color: rgba(114, 239, 219, 1);
   margin-top: 50px;

   img {
      width: 137px;
      height: 27px;
   }
`
