import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
const Service1 = lazy(() => import('./Service1'))
const Service2 = lazy(() => import('./Service2'))
const Service3 = lazy(() => import('./Service3'))
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Services = lazy(() => import('./Services'))

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Link to={'/home'}>Home</Link>{" "}
        <Link to={'/about'}>About</Link>{" "}
        <Link to={'/services'}>Services</Link>
        <Routes>
          <Route path='/home' element={
            <Suspense fallback={<h2>Loading...!</h2>}>
              <Home />
            </Suspense>}>
          </Route>
          <Route path='/about' element={
            <Suspense fallback={<h2>Loading...!</h2>}>
              <About />
            </Suspense>}>
          </Route>
          <Route path='/services' element={
            <Suspense fallback={<h2>Loading...!</h2>}>
              <Services />
            </Suspense>}>
          </Route>
          <Route path='/service1' element={
            <Suspense fallback={<h2>Loading...!</h2>}>
              <Service1 />
            </Suspense>}>
          </Route>
          <Route path='/service2' element={
            <Suspense fallback={<h2>Loading...!</h2>}>
              <Service2/>
            </Suspense>}>
          </Route>
          <Route path='/service3' element={
            <Suspense fallback={<h2>Loading...!</h2>}>
              <Service3/>
            </Suspense>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
