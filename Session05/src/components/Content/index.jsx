import React from 'react';
import './style.css'
import Products from '../Products';

export default function Content(props) {
  return(
    <div className="content">
      <h1>Content of page</h1>
      <hr />
      <Products />
    </div>
  );
}