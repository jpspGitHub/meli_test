import Page from "../components/page";
import ProductHeader from '../components/product-header'
import ProductDescription from '../components/product-description'
import ProductAPIService from '../services/product-api-service';
import QueryResult from "../components/query-result";
import usePromise from "../hooks/usePromise";
import ProductBreadcrumbContext from "../context/product-breadcrumb-context";
import './../styles/product-detail.scss'

export default function ProductDetail({ id }) {
    const [data, error, loading] = usePromise(ProductAPIService.getProduct, id);

    return (
        <ProductBreadcrumbContext.Provider value={data?.categories}>
            <QueryResult loading={loading} error={error} data={data}>
                <Page title={data?.item?.title} description={data?.item?.description} classes={["product-detail"]} >
                    <ProductHeader product={data?.item}></ProductHeader>
                    <ProductDescription product={data?.item}></ProductDescription>
                </Page>
            </QueryResult>
        </ProductBreadcrumbContext.Provider>
    )
}


