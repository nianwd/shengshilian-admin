/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const goodsRouter = {
    path: '/goods',
    component: Layout,
    redirect: '/goods/list',
    name: '商品管理',
    meta: {
        title: '商品管理',
        icon: 'user'
    },
    children: [{
            path: 'create',
            component: () =>
                import ('@/views/goods/create'),
            name: 'CreateGoods',
            meta: { title: '创建商品', icon: 'create' },
            hidden: true
        },
        {
            path: 'edit/:id(\\d+)',
            component: () =>
                import ('@/views/goods/edit'),
            name: 'EditGoods',
            meta: { title: '编辑商品', noCache: true, activeMenu: '/goods/list' },
            hidden: true
        },
        {
            path: 'list',
            component: require('@/views/goods').default,
            name: '商品列表',
            meta: { title: '商品列表' }
        },
        {
            path: 'goodsCategory/list',
            component: require('@/views/goods/goodsCategory/list').default,
            name: '商品分类',
            meta: { title: '商品分类' }
        },
        {
            path: 'goodsCategory/create',
            component: () =>
                import ('@/views/goods/goodsCategory/create'),
            name: 'CreateGoods',
            meta: { title: '创建商品分类', icon: 'edit' },
            hidden: true
        },
        {
            path: 'goodsCategory/edit/:id(\\d+)',
            component: () =>
                import ('@/views/goods/goodsCategory/edit'),
            name: 'EditGoods',
            meta: { title: '编辑商品分类', noCache: true, activeMenu: '/goodsCategory/list' },
            hidden: true
        },
        {
            path: 'goodsAttr/list',
            component: require('@/views/goods/goodsAttr/list').default,
            name: '商品属性',
            meta: { title: '商品属性' }
        },
        {
            path: 'goodsAttr/create',
            component: () =>
                import ('@/views/goods/goodsAttr/create'),
            name: 'CreateGoodsAttr',
            meta: { title: '创建商品属性', icon: 'edit' },
            hidden: true
        },
        {
            path: 'goodsAttr/edit/:id(\\d+)',
            component: () =>
                import ('@/views/goods/goodsAttr/edit'),
            name: 'EditGoodsAttr',
            meta: { title: '编辑商品属性', noCache: true, activeMenu: '/goodsAttr/list' },
            hidden: true
        }
    ]
}

export default goodsRouter