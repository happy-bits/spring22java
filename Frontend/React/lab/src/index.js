import React from 'react';
import ReactDOM from 'react-dom';
// import Email from './email/Email06';
//import Simple from './simple/Simple01'
// import Simple02 from './simple/Simple02'
import Simple05 from './simple/Simple05'

import Movie from './movie/Movie04'

ReactDOM.render(
  <React.StrictMode>

    <Movie maxstars={6} />

    <Movie maxstars={3} />

  </React.StrictMode>,
  document.getElementById('root')
);


{/* <Simple valuetext="Value"  />
F    <Simple header="Min rubrik" valuetext="Mitt värde"  /> */}
