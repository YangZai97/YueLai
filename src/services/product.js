import axios from 'axios';

let product = {
    productList,
    productDetails,
    buyProduct,
    getBill,
    spider,
    getForecastList,
    Yuce
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
function spider() {
    return axios({
        url: `/api/goods/resource/spider/`,
        method: 'get'
    });
}

function getBill(data) {
    return axios({
        url: `/api/account/bills/`,
        method: 'get',
        params:data
    });
}

function getForecastList(data) {
    return axios({
        url: `/api/goods/resource/`,
        method: 'get',
        params:data
    });
}

function Yuce(data) {
    return axios({
        url: `/api/goods/resource/yuce/`,
        method: 'get',
        params:data
    });
}

export default {

    product

};
