import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container, HeaderDivider, WrapperTable, TH, TD } from '../styles';

interface TableSkeletonProps {
  pageSize: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ pageSize }) => {
  const getSkeletonRows = () => {
    const auxItems = [];

    for (let index = 0; index < pageSize; index += 1) {
      auxItems.push(
        <tr key={`row${index}_skeleton`}>
          <TD key={`row${index}_by_column1_skeleton`}>
            <Skeleton width={100} height={20} />
          </TD>
          <TD key={`row${index}_by_column2_skeleton`}>
            <Skeleton width={100} height={20} />
          </TD>
          <TD key={`row${index}_by_column3_skeleton`}>
            <Skeleton width={100} height={20} />
          </TD>
          <TD key={`row${index}_by_column4_skeleton`}>
            <Skeleton width={100} height={20} />
          </TD>
        </tr>,
      );
    }

    return auxItems;
  };

  return (
    <Container>
      <HeaderDivider
        color="deafult"
        data-testid="Skeleton-Table-Header-Divider"
      />

      <WrapperTable data-testid="Skeleton-Table-Wrapper-Table">
        <table>
          <thead>
            <tr>
              <TH key="column_skeleton_column1">
                <Skeleton width={120} height={20} />
              </TH>
              <TH key="column_skeleton_column2">
                <Skeleton width={120} height={20} />
              </TH>
              <TH key="column_skeleton_column3">
                <Skeleton width={120} height={20} />
              </TH>
              <TH key="column_skeleton_column4">
                <Skeleton width={120} height={20} />
              </TH>
            </tr>
          </thead>

          <tbody>{getSkeletonRows()}</tbody>
        </table>
      </WrapperTable>
    </Container>
  );
};

export default TableSkeleton;
