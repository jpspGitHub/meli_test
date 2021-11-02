const MELIServiceAgent = require('../serviceAgent/product');
const CacheService = require('./cache');

const ProductService = () => {
    const getCategories = async (categoryId) => {
        const cacheService = CacheService();

        const getServerCategory = async () => {
            const category = await MELIServiceAgent().getCategories(categoryId);
            cacheService.setCache('CATEGORY', category.id, category)
            return category;
        }

        return cacheService.getCache('CATEGORY', categoryId) || await getServerCategory();
    }

    const getCurrency = async (currencyId) => {
        const cacheService = CacheService();

        const getServerCurrency = async () => {
            const currency = await MELIServiceAgent().getCurrencyDetails(currencyId);
            cacheService.setCache('CURRENCY', currency.id, currency)
            return currency;
        }

        return cacheService.getCache('CURRENCY', currencyId) || await getServerCurrency();
    }

    const getProduct = async (id) => {
        try {
            const product = await MELIServiceAgent().getProduct(id);
            if (product) {
                const productDescription = await MELIServiceAgent().getProductDescription(id);
                const currency = await getCurrency(product.currency_id);
                const category = await getCategories(product.category_id);
                return {
                    author: {
                        name: '',
                        lastname: ''
                    },
                    categories: category?.path_from_root.map(path => path.name),
                    item: {
                        id: product.id,
                        title: product.title,
                        price: {
                            currency: currency.symbol,
                            amount: product.price,
                            decimals: 0,
                        },
                        picture: product.pictures[0].url,
                        condition: product.condition,
                        free_shipping: product.shipping.free_shipping,
                        sold_quantity: product.sold_quantity,
                        description: productDescription.plain_text
                    }
                }
            }
        } catch (error) {
            throw error
        }
    };

    const searchProduct = async (query) => {
        try {
            const searchResult = await MELIServiceAgent().searchProduct(query);
            if (searchResult?.results) {
                return Promise.all(await searchResult.results.slice(0,4).map(async (item) => {
                    const currency = await getCurrency(item.currency_id);
                    return {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: currency?.symbol,
                            amount: item.price,
                            decimals: 0,
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping,
                    }
                }))
                    .then(items => {
                        return {
                            author: {
                                name: '',
                                lastname: '',
                            },
                            categories: searchResult.filters.find(filter => filter.id === 'category')?.values[0]?.path_from_root.map(path => path.name),
                            items
                        }
                    });
            }
        } catch (error) {
            throw error
        }

    }
    return {
        getCategories,
        getProduct,
        searchProduct
    }
}

module.exports = ProductService