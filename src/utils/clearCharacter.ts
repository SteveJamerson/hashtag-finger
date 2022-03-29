export const clearCharacter = (str: string) => {
   return str
      .normalize('NFD')
      .replace(/[^0-9a-zA-Z\s+]+/g, '')
      .replace(/( )+/g, ' ');
};
