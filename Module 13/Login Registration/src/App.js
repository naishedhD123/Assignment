import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';


function App() {

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
