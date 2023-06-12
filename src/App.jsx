import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import ThemeProvider from './components/Context/ThemeProvider';
import Layout from './components/Layout';
import UserData from './components/Context/UserData';
function App() {
  return (
    <UserData>
      <ThemeProvider>
        <Layout>
          <Header />
          <SearchBar />
          <UserProfile />
        </Layout>
      </ThemeProvider>
    </UserData>
  );
}

export default App;
