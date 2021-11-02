import ShippingIcon from './shipping-icon';

export default function SearchResultItem({ product }) {
    return (
        <div className="search-item">
            <div className="item-img">
                <img src={product.picture} alt={product.title}></img>
            </div>
            <div className="item-detail">
                <div className="item-sale-info">
                    <span className="price">
                        {`${product.price.currency} ${product.price.amount}`}
                        <ShippingIcon freeShipping={product.free_shipping}></ShippingIcon></span>
                    <span className="title">{product.title}</span>
                </div>
                <div className="location-info">
                    <span>No Info</span>
                </div>
            </div>
        </div>
    )
}