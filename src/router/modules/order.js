/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const orderRouter = {
    path: '/order',
    component: Layout,
    redirect: '/order/list',
    name: '订单管理',
    meta: {
        title: '订单管理',
        icon: 'shopping'
    },
    children: [{
        path: 'list',
        component: require('@/views/order/list').default,
        name: '订单列表',
        meta: { title: '订单列表' }
    }]
}

// eslint-disable-next-line eol-last
export default orderRouter