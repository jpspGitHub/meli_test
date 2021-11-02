export default function ProductDescription({ product }) {
    return (
        <div className="product-description">
            <h2 className="title">Descripcion del producto</h2>
            <p className="text">
                {product.description}
            </p>
        </div>
    )
}