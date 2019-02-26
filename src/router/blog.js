const blog = [
  {
    path: '/page1',
    name: 'Page1',
    meta: {
      title: '页面1',
      icon: ''
    },
    component: () => import('@/views/page1')
  },
  {
    path: '/page2',
    name: 'Page2',
    meta: {
      title: '页面2',
      icon: ''
    },
    component: () => import('@/views/page2')
  }
]
export default blog
