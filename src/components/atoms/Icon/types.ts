import { ReactComponent as Info } from '../../../assets/icons/info.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

const IconsTypes = {
   info: Info,
   user: User,
   search: Search,
};

export default IconsTypes;

export type IconName = 'info' | 'user' | 'search';
