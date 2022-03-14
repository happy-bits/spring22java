import React from 'react';
import ReactDOM from 'react-dom';
//import Email from './email/Email03';
import Simple from './simple/Simple05'

ReactDOM.render(
  <React.StrictMode>

    <Simple valuetext="Value"  />
    <Simple header="Min rubrik" valuetext="Mitt värde"  />

  </React.StrictMode>,
  document.getElementById('root')
);

