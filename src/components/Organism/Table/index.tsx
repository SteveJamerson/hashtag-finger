/* eslint-disable react/no-array-index-key */
import React, {
   forwardRef,
 } from 'react';

 // Components
 import TableSkeleton from './Skeleton/TableSkeleton';

 // Types
 import IColumnsTable from './types/IColumnsTable';
 import IDataTable from './types/IDataTable';

 import {
   Container,
   WrapperTable,
   TH,
   TD,
   ErroDiv,
   SubTitle,
 } from './styles';

 interface TableProps {
   loading?: boolean;
   color?: 'deafult' | 'red';
   showPagination?: boolean;
   columns: Array<IColumnsTable>;
   data: Array<IDataTable>;
   subTitle?: string;
 }

 type RefProps = {
   clearPagination: () => void;
 };

 const TableComponent = forwardRef<RefProps, TableProps>(
   (
     {
       loading,
       columns,
       data,
       subTitle
     }
   ) => {
     const getRowByColumn = (rowObject: any, columnKey: string) => {
       return rowObject[columnKey].component;
     };

   //   const handleChangePage = useCallback(
   //     (newPagination: PagableTypes) => {
   //       if (setPageable) {
   //         setPageable(newPagination);
   //       }
   //     },
   //     // eslint-disable-next-line react-hooks/exhaustive-deps
   //     [setPageable],
   //   );

     return (
       <>
         <Container >
            {subTitle && (<SubTitle>
               {subTitle}
            </SubTitle>)}
             <>
               <WrapperTable>
                 <table>
                   <thead>
                     <tr>
                       {columns.map(column => (
                         <TH
                           data-testid={`TH-Check-${column.key}`}
                           key={`column_${column.key}`}
                           align={column.align || undefined}
                           size={column.size || undefined}
                         >
                           <div>
                             <p>{column.value}</p>
                           </div>
                         </TH>
                       ))}
                     </tr>
                   </thead>
                   <tbody>
                     {data.length > 0 &&
                       data.map((row, index) => (
                         <tr key={`row_${index}`}>
                           {columns.map(column => (
                             <TD
                               key={`row_by_column_${column.key}`}
                               align={column.align || undefined}
                               size={column.size || undefined}
                             >
                               {getRowByColumn(row.rows, column.key)}
                             </TD>
                           ))}
                         </tr>
                       ))}
                   </tbody>
                 </table>
                 {data.length === 0 &&
                     <ErroDiv>
                       <h2>Sem resultados para a busca.</h2>
                     </ErroDiv>
                   }
               </WrapperTable>
             </>
           {/* {showPagination && (
             <Pagination
               data={requestPaginationData}
               onChange={handleChangePage}
               ref={paginationRef}
             />
           )} */}
         </Container>
       </>
     );
   },
 );

 export default TableComponent;
