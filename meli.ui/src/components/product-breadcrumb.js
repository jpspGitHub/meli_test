import ProductBreadcrumbContext from "../context/product-breadcrumb-context";
import './../styles/breadcrumb.scss'

export default function ProductBreadcrumb() {
    return (
        <ProductBreadcrumbContext.Consumer>
            {
                (context) => (
                    <div className="breadcrumb">
                        {
                            context?.map((item, index) => (
                                <span className="link" key={index}>{item}</span>
                            ))
                        }
                    </div>

                )
            }
        </ProductBreadcrumbContext.Consumer>

    )
}