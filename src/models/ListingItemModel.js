import PropTypes from 'prop-types';

function ListingItemModel() {
  return PropTypes.shape({            
      listing_id: PropTypes.number,
      url: PropTypes.string,
      MainImage: PropTypes.shape({ url_570xN: PropTypes.string }),
      title: PropTypes.string,
      currency_code: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number
    } 
  );
}
  
export default ListingItemModel;