import ContentObject from './TransactionContent';
import PageableObject from './Pageable';

export default interface TablePaginationProps {
  content: Array<any>;
  pageable: PageableObject;
  total_pages: number;
  total_elements: number;
}
