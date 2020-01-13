/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: '用户管理',
    meta: {
        title: '用户管理',
        icon: 'user'
    },
    children: [{
            path: 'list',
            component: require('@/views/user').default,
            name: '用户列表',
            meta: { title: '用户列表' }
        },
        {
            path: 'userRole',
            component: require('@/views/user/role').default,
            name: '用户角色',
            meta: { title: '用户角色' }
        },
        {
            path: 'shopList',
            component: require('@/views/user/shop/list').default,
            name: '商家管理',
            meta: { title: '商家管理' }
        },
        {
            path: 'agencyList',
            component: require('@/views/user/agency/list').default,
            name: '代理管理',
            meta: { title: '代理管理' }
        },
        {
            path: 'agency/create',
            component: () =>
                import ('@/views/user/agency/create'),
            name: 'CreateAgency',
            meta: { title: '添加代理', icon: 'create' },
            hidden: true
        },
        {
            path: 'agency/edit/:id(\\d+)',
            component: () =>
                import ('@/views/user/agency/edit'),
            name: 'EditAgency',
            meta: { title: '编辑代理', noCache: true, activeMenu: 'agencyList' },
            hidden: true
        },
    ]
}

// eslint-disable-next-line eol-last
export default userRouter