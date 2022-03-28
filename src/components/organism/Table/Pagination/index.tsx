/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

// Icons & Pictures
import ArrowLeft from '../../../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../../../assets/icons/ArrowRight.svg';
import seeMore from '../../../../assets/icons/see_more.svg';

import PagableTypes from '../types/PagableTypes';
import TablePaginationProps from '../types/Pagination';

import {
  Container,
  LinesDiv,
  PagesDiv,
  Dropbox,
  DropboxContent,
  ListOption,
  Option,
  ArrowsDiv,
} from './styles';

interface PaginationProps {
  data?: TablePaginationProps;
  onChange: (object: PagableTypes) => void;
}

type RefProps = {
  clearPagination: () => void;
};

const Pagination = forwardRef<RefProps, PaginationProps>(
  ({ data, onChange }, forwardedRef) => {
    useImperativeHandle(forwardedRef, () => ({
      clearPagination() {
        setPageNumber(0);
      },
    }));

    const [containerNumberPerPagesOpen, setContainerPagesOpen] =
      useState(false);
    const [containerNumberPagesOpen, setContainerNumberPagesOpen] =
      useState(false);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [pageNumber, setPageNumber] = useState(0);
    const [dataFromReq, setDataFromReq] = useState<TablePaginationProps>();

    const pages = useMemo(() => {
      const defaultValue = [0];
      const defaultFormated: Array<number> = [];
      defaultValue.forEach(numberAtLeastWithTwoDigits => {
        const formattedString = numberAtLeastWithTwoDigits.toLocaleString(
          'pt-BR',
          {
            minimumIntegerDigits: 2,
            useGrouping: false,
          },
        );
        const formattedNumber = parseInt(formattedString, 36);
        defaultFormated.push(formattedNumber);
      });
      if (data) {
        const array = [];
        const arrayFormatted: Array<number> = [];
        for (let i = 0; i < data.total_pages; i += 1) {
          array.push(i + 1);
        }
        array.forEach(numberAtLeastWithTwoDigits => {
          const formattedString = numberAtLeastWithTwoDigits.toLocaleString(
            'pt-BR',
            {
              minimumIntegerDigits: 2,
              useGrouping: false,
            },
          );
          const formattedNumber = parseInt(formattedString, 10);
          arrayFormatted.push(formattedNumber);
        });
        return arrayFormatted;
      }
      return defaultValue;
    }, [data]);

    const FirstItem = useMemo(() => {
      if (dataFromReq) {
        const { pageable } = dataFromReq;
        if (dataFromReq.pageable) {
          const { offset, page_number } = pageable;
          if (page_number === 0) {
            return 1;
          }
          const items = offset + 1;
          return items;
        }
      }
      return 0;
    }, [dataFromReq]);

    const SecondItem = useMemo(() => {
      if (dataFromReq) {
        const { pageable, total_elements } = dataFromReq;
        if (dataFromReq.pageable) {
          const { offset, page_size, page_number } = pageable;
          if (page_size > total_elements) {
            return total_elements;
          }
          if (page_number === 0) {
            return page_size;
          }
          const items = offset + page_size;
          if (items > total_elements) {
            return total_elements;
          }
          return items;
        }
      }
      return 0;
    }, [dataFromReq]);

    useEffect(() => {
      if (data) {
        setDataFromReq(data);
      }
    }, [data, dataFromReq]);

    useEffect(() => {
      setPageNumber(0);
    }, []);

    const handlePageSelection = useCallback(
      (page: number) => {
        setPageNumber(page);
        setContainerNumberPagesOpen(!containerNumberPagesOpen);
      },
      [containerNumberPagesOpen],
    );

    const handlePreviousPage = () => {
      setPageNumber(pageNumber - 1);
    };

    const handleNextPage = () => {
      setPageNumber(pageNumber + 1);
    };

    useEffect(() => {
      onChange({ size: numberPerPage, page: pageNumber });
    }, [numberPerPage, pageNumber, onChange]);

    const wrapperRef = useRef(document.createElement('div'));

    return (
      <>
        {dataFromReq?.content?.length !== 0 && (
          <Container ref={wrapperRef}>
            <LinesDiv visibility={!!data}>
              <div>
                <Dropbox
                  onClick={() =>
                    setContainerPagesOpen(!containerNumberPerPagesOpen)
                  }
                  data-testid="Dropbox"
                >
                  <div>
                    <span className="title_default">{numberPerPage}</span>
                  </div>
                  <img src={seeMore} alt="Open CheckBox Itens per Line" />
                </Dropbox>
                {containerNumberPerPagesOpen && (
                  <DropboxContent>
                    <ListOption>
                      <Option
                        onClick={() => {
                          setNumberPerPage(100);
                          setContainerPagesOpen(!containerNumberPerPagesOpen);
                        }}
                      >
                        <span>100</span>
                      </Option>
                      <Option
                        onClick={() => {
                          setNumberPerPage(50);
                          setContainerPagesOpen(!containerNumberPerPagesOpen);
                        }}
                      >
                        <span>50</span>
                      </Option>
                      <Option
                        onClick={() => {
                          setNumberPerPage(20);
                          setContainerPagesOpen(!containerNumberPerPagesOpen);
                        }}
                      >
                        <span>20</span>
                      </Option>
                      <Option
                        onClick={() => {
                          setNumberPerPage(10);
                          setContainerPagesOpen(!containerNumberPerPagesOpen);
                        }}
                      >
                        <span>10</span>
                      </Option>
                    </ListOption>
                  </DropboxContent>
                )}
              </div>
              <p>Itens exibidos</p>
            </LinesDiv>
            <PagesDiv data-testid="Pages_div" visibility={!!data}>
              {dataFromReq ? (
                <p>
                  {`${FirstItem}-${SecondItem} de`}{' '}
                  <b>{`${dataFromReq.total_elements} Itens`}</b>{' '}
                </p>
              ) : (
                <p>Nenhuma transação encontrada</p>
              )}
              <ArrowsDiv
                onClick={handlePreviousPage}
                display={pageNumber !== 0}
                data-testid="Previous_page"
              >
                <img src={ArrowLeft} alt="Previus Page" />
              </ArrowsDiv>

              <div>
                <Dropbox
                  onClick={() =>
                    setContainerNumberPagesOpen(!containerNumberPagesOpen)
                  }
                  data-testid="Dropbox2"
                >
                  <div>
                    <span className="title_default">
                      {(pageNumber + 1).toLocaleString('pt-BR', {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      })}
                    </span>
                  </div>
                  <img src={seeMore} alt="Open CheckBox Itens per Line" />
                </Dropbox>

                {containerNumberPagesOpen && (
                  <div>
                    <DropboxContent data-testid="Page_options">
                      <ListOption>
                        {pages
                          .map((page: number) => (
                            <Option
                              key={page - 1}
                              onClick={() => handlePageSelection(page - 1)}
                            >
                              {page}
                            </Option>
                          ))
                          .reverse()}
                      </ListOption>
                    </DropboxContent>
                  </div>
                )}
              </div>
              <ArrowsDiv
                onClick={handleNextPage}
                display={
                  !!(dataFromReq && pageNumber + 1 !== dataFromReq.total_pages)
                }
                data-testid="Next_page"
              >
                <img src={ArrowRight} alt="Next Page" />
              </ArrowsDiv>
            </PagesDiv>
          </Container>
        )}
      </>
    );
  },
);

export default Pagination;
