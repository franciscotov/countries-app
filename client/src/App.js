import styles from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Countries from './components/Countries/Countries';
import Pages from './components/Pages/Pages';
import CountryDetails from './components/CountryDetails/CountryDetails';
import CreateActivity from './components/CreateActivity/CreateActivity';
import Home from './components/Home/Home';
import Filters from './components/Filters/Filters'; 
import Nav from './components/Nav/Nav';
// import Countries from './components/Countries/Countries';
// console.log(process.env.REACT_APP_URLAPI);
function App() {
  return (
    <BrowserRouter>
    <div className={styles.App}>
        <Nav />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/countries'>
          <div className={styles.controls} >
            <Form />
            <Filters />
          </div>
          <Pages />
          <Countries />
        </Route>
        <Route path='/countries/:id' component={CountryDetails} />
        <Route path='/createactivity' component={CreateActivity} />
      </div>
    </BrowserRouter>
  );
}


export default App;
