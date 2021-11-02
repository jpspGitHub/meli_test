const fetch = require('node-fetch');

const ITEM_API = 'https://api.mercadolibre.com/items/'
const QUERY_API = 'https://api.mercadolibre.com/sites/MLA/search?q='
const CURRENCY_API = 'https://api.mercadolibre.com/currencies/'
const CATEGORIES_API = 'https://api.mercadolibre.com/categories/'

const MELIServiceAgent = () => {
    const handleResponse = async (response) => {
        if (response.status !== 200) {
            throw { status: response.status, message: response.statusText };
        }

        return await response.json();
    }

    const query = async function (url) {
        const response = await fetch(url);
        return await handleResponse(response);
    }

    const getProduct = async function (id) {
        return await query(`${ITEM_API}${id}`);
    };

    const getProductDescription = async function (id) {
        return await query(`${ITEM_API}${id}/description`);
    };

    const searchProduct = async function (queryString) {
        return await query(`${QUERY_API}${queryString}`);
    };

    const getCurrencyDetails = async function (id) {
        return await query(`${CURRENCY_API}${id}`);
    };


    const getCategories = async function (id) {
        return await query(`${CATEGORIES_API}${id}`);
    };

    return {
        getProduct,
        getProductDescription,
        searchProduct,
        getCurrencyDetails,
        getCategories
    };
}
module.exports = MELIServiceAgent
