import ShippingIcon from './shipping-icon';

export default function ProductHeader({ product }) {

    return (
        <div className="product-header">
            <div >
                <img className="img" src={product.picture} alt={product.title} />
            </div>
            <div className="sale-detail">
                <span className="sold-info">{`${product.condition} - ${product.sold_quantity} Vendidos`}</span>
                <span className="title">{product.title}</span>
                <span className="price">{`${product.price.currency} ${product.price.amount}`}<ShippingIcon freeShipping={product.free_shipping} bigIcon={true}></ShippingIcon></span>
                <button className="buy-button">Comprar</button>
            </div>
        </div>
    )
}