export const clearCharacter = (str: string) => {
   return str.normalize('NFD').replace(/[^a-zA-Z0-9s]/g, '');
};
