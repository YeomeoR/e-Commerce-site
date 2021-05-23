import React from 'react';
import SHOP_DATA from './Shop_Data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return <div>Shop Page</div>;
  }
}

export default ShopPage;
