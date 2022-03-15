import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import Results from "../../models/Results";
import Records from "../../models/Records";
import api from "../../services/api";
import IColumnsTable from "../../components/organism/Table/types/IColumnsTable";
import IDataTable from "../../components/organism/Table/types/IDataTable";
import { Table } from "../../components/organism";
import { Header } from "../../components/molecules";
import { Button, Text } from "../../components/atoms";

// Mock
import dataMock from './dataMock';

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
   const [data, setData] = useState<Results | undefined>();
   const [parsedData, setParsedData] = useState<Array<IDataTable>>([]);

   const getDataTable = async (searchParam: string) => {
      try {
         setLoaded(true);
         const response = await api.get(
            "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?maxRecords=3&view=Grid%20view",
            {
               params: searchParam,
            }
         );
         setData(response.data);
         setLoaded(false);
      } catch (err) {
         setData(undefined);
         setLoaded(false);
      }
   };

   useEffect(() => {
      getDataTable(search);
   }, []);

   useEffect(() => {
      if (dataMock) {
         const { records } = dataMock;
         const tempData: Array<IDataTable> = [];
         records.forEach((element: Records) => {
            const dataString = element.fields.Data.toString();
            const formattedData = dataString.substring(0, 2)+"/"+dataString.substring(2, 4);

            const hourToString = element.createdTime.toString();
            const formattedHour = hourToString.substring(11, 16);

            const rowElement: IDataTable = {
               item: element,
               rows: {
                  hashtag: {
                     component: <p>#{element.fields.Hashtag}</p>,
                  },
                  hour: {
                     component: <p>{formattedHour}</p>,
                  },
                  date: {
                     component: <p>{formattedData}</p>,
                  },
               },
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
         <Header component="nav">
            <Text component="h2" style={{ margin: 0 }}>
               hashtag<b>finder</b>
            </Text>
            <div>
               <Button iconName="info" iconPosition="start" iconSize={10}>
                  SOBRE
               </Button>
               <Button
                  iconName="user"
                  iconPosition="start"
                  iconSize={10}
                  color="secondary"
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
         />
      </Container>
   );
};

export default Research;
