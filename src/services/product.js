import axios from 'axios';

let product = {
    productList,
    productDetails,
    buyProduct,
    getBill
};

function productList(data) {
    return axios({
        url: '/api/goods/category/',
        method: 'get',
        params: data
    });
}

function productDetails(data) {
    return axios({
        url: '/api/goods/goods/',
        method: 'get',
        params: data
    });
}

function buyProduct(id, data) {
    return axios({
        url: `/api/goods/goods/${id}/sold/`,
        method: 'post',
        data: data
    });
}

function getBill(data) {
    return axios({
        url: `/api/account/bills/`,
        method: 'get',
        params:data
    });
}

export default {

    product

};
