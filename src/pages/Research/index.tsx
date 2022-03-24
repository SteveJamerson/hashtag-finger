import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { Container } from "./styles";

import Results from "../../models/Results";
import Records from "../../models/Records";
import api from "../../services/api";
import IColumnsTable from "../../components/organism/Table/types/IColumnsTable";
import IDataTable from "../../components/organism/Table/types/IDataTable";
import { Table } from "../../components/organism/Table";
import { Header } from "../../components/molecules";
import { Button, Text } from "../../components/atoms";
import { useAuth } from '../../hooks/useAuth'
import { useToast } from '../../hooks/useToast'

// Mock
import dataMock from './dataMock';
import TablePaginationProps from "../../components/organism/Table/types/Pagination";

const columns: Array<IColumnsTable> = [
   {
      key: "hashtag",
      value: "Hashtag",
      align: "left",
      size: "M",
   },
   {
      key: "date",
      value: "Data",
      align: "center",
      size: "M",
      color: 'blue'
   },
   {
      key: "hour",
      value: "Hora",
      align: "center",
      size: "M",
      color: 'blue'
   },
];

interface SearchParams {
   search: string;
}

const Research: React.FC<SearchParams> = ({ search }) => {
   const [loaded, setLoaded] = useState(false);
   const [data, setData] = useState<Array<Records> | undefined>();
   const [parsedData, setParsedData] = useState<Array<IDataTable>>([]);

   const { signOut } = useAuth()
   const { addToast } = useToast()
   const navigate = useNavigate();

   const navigateToLogin = () => {
      signOut();

      addToast({
         title: 'Deslogado com sucesso',
         type: 'info',
         description: 'Você foi deslogado para acessar a página de Login'
      })
   }

   const navigateToAbout = () => {
      navigate('/about');
   }

   // Criando referência do componente Paginação
   const tableRef = useRef<React.ElementRef<typeof Table>>(null);
   useEffect(() => {
      tableRef.current?.clearPagination();
   }, [data]);

   const getDataTable = async () => {
      const environmentTable = {
         PATH: "https://api.airtable.com/v0",
         AUTH: "Bearer key2CwkHb0CKumjuM",
         KEY: "app6wQWfM6eJngkD4",
         SQUAD: "zappts_2",
      };
      const url = `${environmentTable.PATH}/${environmentTable.KEY}/Buscas?pageSize=9&filterByFormula=Squad=2&maxRecords=36&view=Grid%20view`;
      const headers = new Headers({
         Authorization: environmentTable.AUTH,
         "Content-Type": "application/json",
      });

      try {
         setLoaded(true);
         const response = await fetch(`${url}`, {
            method: "GET",
            headers: headers,
         });
         const data = await response.json();
         setData(data.records);
         console.log('Response Data: ', data.records)
         setLoaded(false);
      } catch (err) {
         console.log('Error')
         setData(undefined);
         setLoaded(false);
      }
   };

   useEffect(() => {

      const user = localStorage.getItem('@Hashtag-Finger.user')

      if (!user) {
         addToast({
            title: 'Usuário não autenticado',
            type: 'error',
            description: 'É necessário a autenticação para navegar para a página Busca'
         })
         navigate('/')
      }
      getDataTable();
   }, []);

   useEffect(() => {
      if (data) {
         const tempData: Array<IDataTable> = [];
         data.forEach((element: Records) => {
            if (element.fields.Data) {
               const dataString = element.fields.Data.toString();
               const formattedData = dataString.substring(0, 2) + "/" + dataString.substring(2, 4);

               const hourToString = element.createdTime.toString();
               const formattedHour = hourToString.substring(11, 16);

               const rowElement: IDataTable = {
                  item: element,
                  rows: {
                     hashtag: {
                        component: <p>{element.fields.Hashtag ? `#${element.fields.Hashtag}` : '#'}</p>,
                     },
                     hour: {
                        component: <p>{formattedHour ? formattedHour : ''}</p>,
                     },
                     date: {
                        component: <p>{formattedData ? formattedData : ''}</p>,
                     },
                  },
               };
               tempData.push(rowElement);
            }
         });
         setParsedData(tempData);
      } else {
         const clearData: Array<IDataTable> = [];
         setParsedData(clearData);
      }
   }, [data]);

   return (
      <Container>
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button iconName="info" iconPosition="start" iconSize={10} onClick={navigateToAbout}>
                  SOBRE
               </Button>
               <Button
                  iconName="user"
                  iconPosition="start"
                  iconSize={10}
                  color="secondary"
                  onClick={navigateToLogin}
               >
                  LOGIN
               </Button>
            </div>
         </Header>
         <Table
            columns={columns}
            data={parsedData}
            loading={loaded}
            subTitle="Buscas Realizadas"
            ref={tableRef}
         />
      </Container>
   );
};

export default Research;
