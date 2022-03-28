export const linkInText = (str: string) => {
   return str.replace(
      /(?<![>https?://|href=\"'])(?<http>(https?:[/][/]|www.)([a-zA-Z0-9/.&?=-~-]+)*)/g,
      '<a href="$1" target="_blank">$1</a>'
   );
};
