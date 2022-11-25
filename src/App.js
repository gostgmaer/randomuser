import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
