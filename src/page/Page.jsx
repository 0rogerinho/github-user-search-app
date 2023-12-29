import { Theme } from '../theme/Theme';
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
