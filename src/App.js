import './App.css';
import GetData from './Components/GetData/GetData';
import GetError from './Components/GetError/GetError';
import GetLoading from './Components/GetLoading/GetLoading';

function App() {
  return (
    <div className="App">
      <GetData></GetData>
      <GetLoading></GetLoading>
      <GetError></GetError>
    </div>
  );
}

export default App;
