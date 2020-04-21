import React from 'react';
import ListingItemModel from '../models/ListingItemModel';

function ListingItem(props) {
  const {item} = props;
    
  const formatPrice = (price, currencyCode) => {
    if (currencyCode === 'USD') {
      return '$' + price;
    } else if (currencyCode === 'EUR') {
      return '€' + price;
    } else {
      return price + ' ' + currencyCode;
    } 
  }

  const formatTitle = (title) => {
    if (title && title.length > 50)
     return title.slice(0,50) + '...';
    else {
      return title;
    } 
  }

  const quantiryClass = (quantity) => {
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';   
    } else {
      return 'level-high';   
    }
  }
 
  if (item.title) {
    return (    
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{formatTitle(item.title)}</p>
          <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
          <p className={quantiryClass(item.quantity) + ' item-quantity level-medium'}>{item.quantity} left</p>
        </div>       
      </div>
    );
  }  
  else {
    return null;
  }
}

ListingItem.propTypes = {
  item: ListingItemModel().isRequired 
}

export default ListingItem;