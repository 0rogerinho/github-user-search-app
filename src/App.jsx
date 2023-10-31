import Page from '../page/Page';
import { DataProvider, ThemeProvider } from './Context';

function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
