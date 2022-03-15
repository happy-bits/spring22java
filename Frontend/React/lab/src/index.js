import React from 'react';
import ReactDOM from 'react-dom';
// import Email from './email/Email06';
// import Simple from './simple/Simple05'

import Movie from './movie/Movie01'

ReactDOM.render(
  <React.StrictMode>

    <Movie />
    {/* <Simple valuetext="Value"  />
    <Simple header="Min rubrik" valuetext="Mitt värde"  /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

