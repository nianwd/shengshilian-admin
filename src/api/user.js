import request from '@/utils/request'

export function userList(query) {
    return request({
        url: '/admin/user',
        method: 'get',
        params: query
    })
}

export function getUser(id) {
    return request({
        url: '/admin/user/' + id,
        method: 'get'
    })
}

export function updateUser(id, data) {
    return request({
        url: '/admin/user/' + id,
        method: 'post',
        data
    })
}

export function userRoleList(query) {
    return request({
        url: '/admin/userRole',
        method: 'get',
        params: query
    })
}

export function getUserRole(id) {
    return request({
        url: '/admin/userRole/' + id,
        method: 'get'
    })
}

export function updateUserRole(id, data) {
    return request({
        url: '/admin/userRole/' + id,
        method: 'post',
        data
    })
}

export function shopList(query) {
    return request({
        url: '/admin/shop',
        method: 'get',
        params: query
    })
}

export function getShop(id) {
    return request({
        url: '/admin/shop/' + id,
        method: 'get'
    })
}

export function auditShop(data) {
    return request({
        url: '/admin/auditShop',
        method: 'post',
        data
    })
}

export function agencyList(query) {
    return request({
        url: '/admin/agency',
        method: 'get',
        params: query
    })
}

export function getAgency(id) {
    return request({
        url: '/admin/agency/' + id,
        method: 'get'
    })
}

export function auditAgency(data) {
    return request({
        url: '/admin/auditAgency',
        method: 'post',
        data
    })
}

export function createAgency(data) {
    return request({
        url: '/admin/agency',
        method: 'post',
        data
    })
}

export function updateAgency(id, data) {
    return request({
        url: '/admin/agency/' + id,
        method: 'post',
        data
    })
}

export function getTreeAreas() {
    return request({
        url: '/getTreeAreas',
        method: 'get'
    })
}