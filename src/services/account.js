import axios from 'axios';

let account = {
    register,
    login,
    getSoldList,
    getUserInfo,
    editorPassword
};

function register(data) {
    return axios({
        url: '/api/account/users/',
        method: 'post',
        data: data
    });
}

function login(data) {
    return axios({
        url: '/api/login/',
        method: 'post',
        data: data
    });
}

function getUserInfo() {
    return axios({
        url: '/api/account/identify',
        method: 'get',
    });

}

function editorPassword(id, data) {
    return axios({
        url: `/api/account/users/${id}/set_password/`,
        method: 'put',
        data: data
    });

}
function getSoldList() {
    return axios({
        url: `/api/account/users/revenue/`,
        method: 'get'
    });

}

export default {

    account

};
