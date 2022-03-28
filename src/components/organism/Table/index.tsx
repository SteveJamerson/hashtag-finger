/* eslint-disable react/no-array-index-key */
import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";

// Types
import IColumnsTable from "./types/IColumnsTable";
import IDataTable from "./types/IDataTable";

import { Container, WrapperTable, TH, TD, ErroDiv, SubTitle } from "./styles";
import Pagination from "./Pagination";
import TablePaginationProps from "./types/Pagination";
import PagableTypes from "./types/PagableTypes";

interface TableProps {
   loading?: boolean;
   color?: "deafult" | "red";
   showPagination?: boolean;
   columns: Array<IColumnsTable>;
   data: Array<IDataTable>;
   subTitle?: string;
   requestPaginationData?: TablePaginationProps;
}

type RefProps = {
   clearPagination: () => void;
};

export const Table = forwardRef<RefProps, TableProps>(
   ({ loading, columns, data, subTitle, requestPaginationData, showPagination }, ref,) => {
      const [pageable, setPageable] = useState<PagableTypes | undefined>();
      const getRowByColumn = (rowObject: any, columnKey: string) => {
         return rowObject[columnKey].component;
      };

        const handleChangePage = useCallback(
          (newPagination: PagableTypes) => {
            if (setPageable) {
              setPageable(newPagination);
            }
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [setPageable],
        );

        const paginationRef = useRef<React.ElementRef<typeof Pagination>>(null);
    useImperativeHandle(ref, () => ({
      clearPagination() {
        paginationRef.current?.clearPagination();
      },
    }));

      return (
         <>
            <Container>
               {subTitle && <SubTitle>{subTitle}</SubTitle>}
               <>
                  <WrapperTable>
                     <table>
                        <thead>
                           <tr>
                              {columns.map((column) => (
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
                                    {columns.map((column) => (
                                       <TD
                                          key={`row_by_column_${column.key}`}
                                          align={column.align || undefined}
                                          size={column.size || undefined}
                                          color={column.color || 'white'}
                                       >
                                          {getRowByColumn(row.rows, column.key)}
                                       </TD>
                                    ))}
                                 </tr>
                              ))}
                        </tbody>
                     </table>
                     {data.length === 0 && (
                        <ErroDiv>
                           <h2>Sem resultados para a busca.</h2>
                        </ErroDiv>
                     )}
                  </WrapperTable>
               </>
               {showPagination && (
             <Pagination
               data={requestPaginationData}
               onChange={handleChangePage}
               ref={paginationRef}
             />
           )}
            </Container>
         </>
      );
   }
);

export default Table;
