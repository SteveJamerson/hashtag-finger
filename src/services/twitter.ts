import { environment } from '../environment';
import api from './api';

const { ENDPOINT_TWITTER, TOKEN_TWITTER } = environment;

export const getTweets = (str: string) => {
   return api.get(ENDPOINT_TWITTER, {
      headers: {
         Authorization: `Bearer ${TOKEN_TWITTER}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
         query: str + ' -is:retweet',
         max_results: 10,
         expansions: 'author_id',
         sort_order: 'recency',
         'user.fields': 'profile_image_url',
      },
   });
};

export const getImages = async (str: string) => {
   return api.get(ENDPOINT_TWITTER, {
      headers: {
         Authorization: `Bearer ${TOKEN_TWITTER}`,
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
};
