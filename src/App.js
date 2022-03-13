import './App.css';
import { CustomProvider } from 'rsuite';
import { PlayersTableDashboard } from './components/PlayersTableDashboard';

function App() {
  return (
    <CustomProvider theme="dark">
      <div className="App">
        <PlayersTableDashboard />
      </div>
    </CustomProvider>
  );
}

export default App;
