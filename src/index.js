import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppTheme extends React.Component {
  render() {
    return (
    	<HashRouter>
	      <MuiThemeProvider>
	        <App />
	      </MuiThemeProvider>
	    </HashRouter>  
    )
  }
}

ReactDOM.render(<AppTheme />, document.getElementById('root'));
registerServiceWorker();
