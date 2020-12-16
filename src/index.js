import React from 'react';
import ReactDOM from 'react-dom';

import Heading from "./heading";
import Para from "./para";
import List from "./list";
import dev1,{developer2 , Myname, Mynames} from "./comp";

ReactDOM.render(
  <>
  <Heading/>
  <Para/>
  <List/>
  <Heading/>
  <Para/>
  <List/>
  <Heading/>
  <Para/>
  <List/>
  <Heading/>
  <Para/>
  <List/>
  <Heading/>
  
<div>
  <ol>
    <li>{dev1}</li>
    <li>{developer2}</li>
    <li>{Myname()}</li>
    <li>{Mynames()}</li>
  </ol>
  </div>
 
  </>,document.getElementById('root')
)