import { ReactComponent as Info } from '../../../assets/icons/info.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Envelope } from '../../../assets/icons/envelope.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as Power } from '../../../assets/icons/power.svg';

const IconsTypes = {
   info: Info,
   user: User,
   home: Home,
   search: Search,
   envelope: Envelope,
   github: Github,
   linkedin: Linkedin,
   power: Power,
};

export default IconsTypes;

export type IconName =
   | 'info'
   | 'user'
   | 'home'
   | 'search'
   | 'envelope'
   | 'github'
   | 'linkedin'
   | 'power';
