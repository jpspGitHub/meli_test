import ProductAPIService from "../services/product-api-service";
import QueryResult from "../components/query-result";
import Page from "../components/page";
import SearchResultItem from "../components/search-result-item";
import { Link, useLocation } from "@reach/router";
import usePromise from "../hooks/usePromise";
import { parse } from "query-string";
import ProductBreadcrumbContext from "../context/product-breadcrumb-context";
import './../styles/search-result.scss'

export default function SearchResult() {

    const location = useLocation()
    const searchParams = parse(location.search)
    const [data, error, isLoading] = usePromise(ProductAPIService.searchProduct, searchParams.search);

    return (
        <ProductBreadcrumbContext.Provider value={data?.categories}>
            <QueryResult loading={isLoading} error={error} data={data}>
                <Page title={`Resultados de ${searchParams?.search}`} description={data?.categories?.join(', ')} classes={["search-result"]} >
                    {
                        data?.items?.map(item => (
                            <Link key={item.id} to={`/items/${item.id}`}>
                                <SearchResultItem product={item}></SearchResultItem>
                            </Link>
                        ))
                    }
                </Page>
            </QueryResult>
        </ProductBreadcrumbContext.Provider>
    );
}