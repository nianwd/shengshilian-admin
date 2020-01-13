import request from '@/utils/request'

export function orderList(query) {
    return request({
        url: '/admin/order/list',
        method: 'get',
        params: query
    })
}

export function orderDetail(query) {
    return request({
        url: '/admin/order/detail',
        method: 'get',
        params: query
    })
}

export function orderDelivery(data) {
    return request({
        url: 'admin/order/delivery',
        method: 'post',
        data
    })
}

export function auditOrderRefund(data) {
    return request({
        url: 'admin/order/auditOrderRefund',
        method: 'post',
        data
    })
}

export function orderRefund(data) {
    return request({
        url: 'admin/order/orderRefund',
        method: 'post',
        data
    })
}

export function getShipping(query) {
    return request({
        url: '/getShipping',
        method: 'get',
        params: query
    })
}