import React from 'react';
import PropTypes from 'prop-types';
import ListingItemModel from '../models/ListingItemModel';
import ListingItem from './ListingItem';

function Listing(props) {
  const {items} = props;  
  
  return (
    <div className="item-list">
      {items.map( (item) => <ListingItem key={item.listing_id} item={item} />)}
    </div>
  );
}
 
Listing.propTypes = {
  items: PropTypes.arrayOf(ListingItemModel()).isRequired 
}

export default Listing;