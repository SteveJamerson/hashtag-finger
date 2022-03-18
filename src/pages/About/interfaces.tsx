export interface CardResponse{
   fields:{
      Descrição:string,
      Email:string,
      Github:string,
      Imagem:ImageProps[],
      LinkedIn:string,
      Nome:string,
      Squad:string
   }
}

export interface ImageProps{
   filename:string,
   height:number,
   id:string,
   size:number,
   type:string,
   url:string,
   width:number
}

