import { Helmet } from 'react-helmet'
import ProductBreadcrumb from './product-breadcrumb';
export default function Page({ title, description, children, classes = [] }) {


    return (
        <>
            <Helmet>
                <title>{`${title} | Mercado Libre`}</title>
                <meta name="description" content={description}></meta>
            </Helmet>
            <ProductBreadcrumb></ProductBreadcrumb>
            <div className={`page ${classes.join(' ')}`}>
                {children}
            </div>
        </>
    );
}