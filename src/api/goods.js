import request from '@/utils/request'

export function goodsList(query) {
    return request({
        url: '/admin/goods',
        method: 'get',
        params: query
    })
}

export function getGoods(id) {
    return request({
        url: '/admin/goods/' + id,
        method: 'get'
    })
}

export function createGoods(data) {
    return request({
        url: '/admin/goods',
        method: 'post',
        data
    })
}

export function updateGoods(id, data) {
    return request({
        url: '/admin/goods/' + id,
        method: 'post',
        data
    })
}

export function deleteGoods(id, ) {
    return request({
        url: '/admin/goods/' + id,
        method: 'delete',
    })
}

export function getCategorys(query) {
    return request({
        url: '/admin/getCategorys',
        method: 'get',
        params: query
    })
}

export function auditGoods(data) {
    return request({
        url: '/admin/auditGoods',
        method: 'post',
        data
    })
}

export function changeBatchUp(data) {
    return request({
        url: '/admin/changeBatchUp',
        method: 'post',
        data
    })
}

export function goodsCategoryList(query) {
    return request({
        url: '/admin/goodsCategory',
        method: 'get',
        params: query
    })
}

export function getGoodsCategory(id) {
    return request({
        url: '/admin/goodsCategory/' + id,
        method: 'get'
    })
}

export function createGoodsCategory(data) {
    return request({
        url: '/admin/goodsCategory',
        method: 'post',
        data
    })
}

export function updateGoodsCategory(id, data) {
    return request({
        url: '/admin/goodsCategory/' + id,
        method: 'post',
        data
    })
}

export function deleteGoodsCategory(id) {
    return request({
        url: '/admin/goodsCategory/' + id,
        method: 'delete'
    })
}

export function goodsAttrList(query) {
    return request({
        url: '/admin/goodsAttr',
        method: 'get',
        params: query
    })
}

export function getGoodsAttr(id) {
    return request({
        url: '/admin/goodsAttr/' + id,
        method: 'get'
    })
}

export function createGoodsAttr(data) {
    return request({
        url: '/admin/goodsAttr',
        method: 'post',
        data
    })
}

export function updateGoodsAttr(id, data) {
    return request({
        url: '/admin/goodsAttr/' + id,
        method: 'post',
        data
    })
}

export function deleteGoodsAttr(id) {
    return request({
        url: '/admin/goodsAttr/' + id,
        method: 'delete'
    })
}