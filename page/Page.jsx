import Theme from '../src/theme/theme';
import { Header, SearchBar, UserProfile } from '../src/components';

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
