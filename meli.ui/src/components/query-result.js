import NotFound from '../pages/not-found'
import PageError from '../pages/page-error'
export default function QueryResult({ error, loading, data, children }) {

    if (error) {
        if(error.response.status === 404){
            return <NotFound></NotFound>
        } else {
            return <PageError></PageError>
        }
    }

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    if (!data) {
        return <p>Nothing to show...</p>;
    }

    if (data) {
        return children;
    }
}