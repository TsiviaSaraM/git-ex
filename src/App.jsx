/* eslint-disable */
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import './App.css';

function App() {
  return (
    <Router >
      <div>
        <AppHeader />
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEditPage} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/stats" component={StatisticPage} />
          <Route path="/" component={HomePage} />
          
        </Switch>
      </div>
    </Router>
  );
  // {/* <PrivateRoute path="/contacts/:id" component={ContactDetailsPage} isAdmin={true} /> */}

}

export default App;
