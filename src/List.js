

import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};



const List = props => (
 <div style={divStyle}>
     <p style={pStyle} >Here we have the css inline style</p>
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>


 </div>

);

export default List;