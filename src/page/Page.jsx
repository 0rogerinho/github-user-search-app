import Theme from '../theme/theme';
import { Header, SearchBar, UserProfile } from '../components';

const Page = () => {
  return (
    <Theme>
      <Header />
      <SearchBar />
      <UserProfile />
    </Theme>
  );
};

export default Page;
