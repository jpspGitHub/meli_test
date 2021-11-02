import { useEffect, useState } from 'react';
export default function usePromise(promise, query) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            await promise(query)
                .then(resp => {
                    setData(resp.data)
                })
                .catch(e => {
                    setError(e);
                })
                .finally(() => {
                    setIsLoading(false);
                });

            setIsLoading(false);
        }

        fetchData();
    }, [query]);
    return [data, error, isLoading]
}