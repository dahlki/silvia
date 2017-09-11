import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import '../public/stylesheets/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);