/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const taskRouter = {
  path: '/task',
  component: Layout,
  redirect: '/task/task-list',
  name: 'Task',
  meta: {
    title: '任务',
    icon: 'table'
  },
  children: [
    {
      path: 'task-queue',
      component: () => import('@/views/task/task-queue'),
      name: 'task-queue',
      meta: { title: '创建任务' }
    },
    // {
    //   path: 'edit/:id(\\d+)',
    //   component: () => import('@/views/example/edit'),
    //   name: 'EditArticle',
    //   meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
    //   hidden: true
    // },
    {
      path: 'task-detail/:id(\\d+)',
      component: () => import('@/views/task/task-detail/index'),
      name: 'task-detail',
      meta: { title: '任务详情' },
      hidden: true
    },
    // {
    //   path: 'schedule-detail',
    //   component: () => import('@/views/schedule/schedule-detail/index'),
    //   name: 'schedule-detail',
    //   meta: { title: 'schedule-detail' }
    // },
    {
      path: 'task-history',
      component: () => import('@/views/task/task-history'),
      name: 'task-history',
      meta: { title: '历史任务' }
    }
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/task/dynamic-table/index'),
    //   name: 'DynamicTable',
    //   meta: { title: 'Dynamic Table' }
    // },
    // {
    //   path: 'drag-table',
    //   component: () => import('@/views/task/drag-table'),
    //   name: 'DragTable',
    //   meta: { title: 'Drag Table' }
    // },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/task/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'Inline Edit' }
    // }
  ]
}
export default taskRouter
