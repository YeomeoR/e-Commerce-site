import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
// withRouter is a HOC that returns a new 'powered-up' component
// passing our menu-item into withRouter will gives us access to 
// location, history and match. What we want to do with our whole
// div item with history so that onClick we can push to some url
// We want the urls to be dynamically generated. In the data detail
// in Directory, we can add a url param: linkUrl. Now we pass that linkUrl into 
// menu-item. There are now a lots of props being passed with the same names.
// We can use an ES6 trick and spread the values in with '{...otherSectionProps}'