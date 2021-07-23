import { getData } from './api/api';
import './App.scss';
import { Header } from './components/Header';

console.log(getData())

function App() {
  return (
    <>
    <Header/>
    
    </>
  );
}

export default App;
