import React from 'react';
import './App.css';
import { CustomProvider } from 'rsuite';
import { PlayersTableDashboard } from './components/PlayersTableDashboard';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <CustomProvider theme="dark">
        <div className="App">
          <PlayersTableDashboard />
        </div>
      </CustomProvider>
    </GlobalProvider>
  );
}

export default App;
