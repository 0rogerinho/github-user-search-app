import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import UserData from './components/Context/UserData';
function App() {
  return (
    <UserData>
      <Header />
      <SearchBar />
      <UserProfile />
    </UserData>
  );
}

export default App;
