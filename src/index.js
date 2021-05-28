import './styles/base/tools/fonts.scss';
import './styles/base/generic/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import MessagesPage from './scripts/components/views/messages-page';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MessagesPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
