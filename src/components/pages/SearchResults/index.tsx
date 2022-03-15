import React, { useEffect, useState } from 'react';
import * as Organisms from '../../Organism';

import { Container } from './styles';

import IDataTable from '../../Organism/Table/types/IDataTable';
import IColumnsTable from '../../Organism/Table/types/IColumnsTable';
import Results from '../../../models/Results';
import Records from '../../../models/Records';
import api from '../../../services/api';

const columns: Array<IColumnsTable> = [
   {
      key: 'hashtag',
      value: 'Hashtag',
      align: 'left',
      size: 'M'
   },
   {
      key: 'date',
      value: 'Data',
      align: 'center',
      size: 'M'
   },
   {
      key: 'hour',
      value: 'Hora',
      align: 'center',
      size: 'M',
   },
]

interface SearchParams {
   search: string;
}

const SearchTable: React.FC<SearchParams> = ({ search }) => {
   const [loaded, setLoaded] = useState(false);
   const [data, setData] = useState<Results | undefined>();
   const [parsedData, setParsedData] = useState<Array<IDataTable>>([]);

   const getDataTable = async (searchParam: string) => {
      try {
         setLoaded(true);
         const response = await api.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?maxRecords=3&view=Grid%20view', {
            params: searchParam,
         });
         setData(response.data);
         setLoaded(false);
      } catch (err) {
         setData(undefined);
         setLoaded(false);
      }
   }

   useEffect(() => {
      getDataTable(search);
   }, [])


   useEffect(() => {
      if (data) {
         const { records } = data;
         const tempData: Array<IDataTable> = [];
         records.forEach((element: Records) => {
            const [year, month, day] =  element.fields.Data.split('-');

            const rowElement: IDataTable = {
               item: element,
               rows: {
                  hashtag: {
                     component: (
                        <p>{element.fields.Hashtag}</p>
                     )
                  },
                  hour: {
                     component: (
                        <p>{element.fields.Data}</p>
                     )
                  },
                  date: {
                     component: (
                        <p>{element.fields.Data}</p>
                     )
                  },
               }
            };
            tempData.push(rowElement);
         });
         setParsedData(tempData);
      } else {
         const clearData: Array<IDataTable> = [];
         setParsedData(clearData);
      }
   }, [data]);

   return (
      <Container>
      <Organisms.Table
         columns={columns}
         data={parsedData}
         loading={loaded}
         subTitle="Buscas Realizadas"
      />
      </Container>
   )
}

export default SearchTable;