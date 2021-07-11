import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageTemplate from './components/templates/pageTemplate';
import ErrorBoundary from './ErrorBoundary';
import Search from './pages/Search';

import './app.scss';

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PageTemplate>
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
            </Switch>
          </Router>
        </PageTemplate>
      </ErrorBoundary>
    </div>
  );
}
