import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Appy = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);


ReactDOM.render(
      <Appy/>,
    document.getElementById('root')
);
