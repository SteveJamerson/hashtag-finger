import api from './api';

export const postFind = async (hashtag: string) => {
   const data = JSON.stringify({
      fields: {
         Squad: '2',
         Hashtag: hashtag,
         Data: new Date().getTime(),
      },
   });

   return await api.post(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas',
      data,
      {
         method: 'POST',
         headers: {
            Authorization: 'Bearer key2CwkHb0CKumjuM',
            'Content-Type': 'application/json',
         },
      }
   );
};
