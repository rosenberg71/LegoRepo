import './App.css';
import EquipmentComponent from './components/Equipment/Equipment';

function App() {
  // NOTE: I have added 3 equipment components to simulate multiple clients
  return (
    <div className="App">
      <header className="App-header">
        <EquipmentComponent /> 
        <EquipmentComponent />
        <EquipmentComponent />
      </header>
    </div>
  );
}

export default App;
