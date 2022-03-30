import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import Records from "../../models/Records";
import IColumnsTable from "../../components/organism/Table/types/IColumnsTable";
import IDataTable from "../../components/organism/Table/types/IDataTable";
import { Table } from "../../components/organism/Table";
import { Header } from "../../components/molecules";
import { Button } from "../../components/atoms";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "../../hooks/useToast";
import { environment } from "../../environment";

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
      color: "blue",
   },
   {
      key: "hour",
      value: "Hora",
      align: "center",
      size: "M",
      color: "blue",
   },
];

interface SearchParams {
   search: string;
}

const { ENDPOINT_AIRTABLE, AUTH_AIRTABLE, KEY_AIRTABLE } = environment;

const Research: React.FC<SearchParams> = ({ search }) => {
   const [loaded, setLoaded] = useState(false);
   const [data, setData] = useState<Array<Records> | undefined>();
   const [parsedData, setParsedData] = useState<Array<IDataTable>>([]);

   const { signOut } = useAuth();
   const { addToast } = useToast();
   const navigate = useNavigate();

   const navigateToLogin = () => {
      signOut();

      addToast({
         title: "Deslogado com sucesso",
         type: "info",
         description: "Você foi deslogado para acessar a página de Login",
      });
   };

   // Criando referência do componente Paginação
   const tableRef = useRef<React.ElementRef<typeof Table>>(null);
   useEffect(() => {
      tableRef.current?.clearPagination();
   }, [data]);

   const getDataTable = async () => {
      setLoaded(true);

      const url = `${ENDPOINT_AIRTABLE}/${KEY_AIRTABLE}/Buscas?filterByFormula=Squad=2`;
      const headers = new Headers({
         Authorization: AUTH_AIRTABLE,
         "Content-Type": "application/json",
      });

      await fetch(`${url}`, {
         method: "GET",
         headers: headers,
      })
         .then((response) => response.json())
         .then((data) => {
            return data.records.sort((a: Records, b: Records) => {
               if (
                  new Date(b.createdTime).getTime() >
                  new Date(a.createdTime).getTime()
               ) {
                  return 1;
               }
               if (
                  new Date(b.createdTime).getTime() <
                  new Date(a.createdTime).getTime()
               ) {
                  return -1;
               }
               return 0;
            });
         })
         .then((data) => {
            setData(data);
            setLoaded(false);
         })
         .catch((err) => {
            console.log("Error");
            setData(undefined);
            setLoaded(false);
         });
   };

   let user = localStorage.getItem("@Hashtag-Finger.user");
   useEffect(() => {
      if (!user) {
         addToast({
            title: "Usuário não autenticado",
            type: "error",
            description:
               "É necessário a autenticação para navegar para a página Busca",
         });
         navigate("/login");
      }
      getDataTable();
   }, []);

   useEffect(() => {
      if (data) {
         const tempData: Array<IDataTable> = [];
         data.forEach((element: Records) => {
            if (element.fields.Data) {
               const [date, hour] = new Date(element.createdTime)
                  .toLocaleString()
                  .split(" ");

               const rowElement: IDataTable = {
                  item: element,
                  rows: {
                     hashtag: {
                        component: (
                           <p>
                              {element.fields.Hashtag
                                 ? `#${element.fields.Hashtag}`
                                 : "#"}
                           </p>
                        ),
                     },
                     hour: {
                        component: <p>{hour ? hour.slice(0, 5) : ""}</p>,
                     },
                     date: {
                        component: <p>{date ? date : ""}</p>,
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
            <div>
               <Button
                  iconName="info"
                  iconPosition="start"
                  iconSize={10}
                  onClick={() => navigate("/about")}
               >
                  SOBRE
               </Button>
               <Button
                  iconName={user ? "power" : "user"}
                  iconPosition="start"
                  iconSize={10}
                  color="secondary"
                  onClick={navigateToLogin}
               >
                  {user ? "SAIR" : "LOGIN"}
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
