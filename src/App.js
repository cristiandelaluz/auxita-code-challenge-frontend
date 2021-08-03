// Layout components
// .- Navbar
import AppFooter from './components/layouts/AppFooter';
// .- Footer
import AppNavbar from './components/layouts/AppNavbar';
// Views
//.- Hypertension calculator view
import HypertensionCalculator from './views/HypertensionCalculator';
//.- Kidney disease calculator view
import KidneyDiseaseCalculator from './views/KidneyDiseaseCalculator';
// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />

        <Switch>
          <Redirect exact from="/" to="/hypertension-calculator" />
          <Route path="/hypertension-calculator">
            <HypertensionCalculator />
          </Route>
          <Route path="/kidney-disease-calculator">
            <KidneyDiseaseCalculator />
          </Route>
          <Route path="/">
            <HypertensionCalculator />
          </Route>
        </Switch>

        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
