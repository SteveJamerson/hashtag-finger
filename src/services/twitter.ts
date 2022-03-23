import api from './api';

export const getTwitter = async (str: string) => {
   const token =
      'AAAAAAAAAAAAAAAAAAAAAKAYagEAAAAA7WzrZGu%2BtJgxRbgLuho4xaI4hVc%3DoXPHjHkRfN5fWkCGL1dYZeqegReTS50InA4DfMvTCbE5yQXMNT';

   const url =
      'https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent';

   const images = await api.get(url, {
      headers: {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
         query: str + ' has:images has:media -is:reply -is:retweet -has:videos',
         max_results: 10,
         expansions: 'author_id,attachments.media_keys',
         sort_order: 'recency',
         'user.fields': 'profile_image_url',
         'tweet.fields': 'attachments',
         'media.fields': 'media_key,preview_image_url,url',
      },
   });

   const tweets = await api.get(url, {
      headers: {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
         query: str,
         max_results: 10,
         expansions: 'author_id',
         sort_order: 'recency',
         'user.fields': 'profile_image_url',
      },
   });

   return { images, tweets };
};
