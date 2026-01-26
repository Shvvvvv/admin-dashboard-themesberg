export const ROUTES = {
  DASHBOARD: {
    name: 'dashboard',
    path: '/',
  },
  USER_SETTING: {
    name: 'user-setting',
    path: '/user-setting',  
    relative: 'user-setting', 
  },
  MESSAGES: {
    name: 'messages',
    path: '/messages',
    relative: 'messages'
  },
  MESSAGES_DETAIL: {
    name: 'messages-detail',
    path: '/messages-detail',
    relative: 'messages-detail'
  },
  USERS: {
    name: 'users',
    path: '/users',
    relative: 'users'
  },
  PROFILE: {
    name: 'profile',
    path: '/profile',
    relative: 'profile'
  },
  PRODUCTS: {
    name: 'products',
    path: '/products',
    relative: 'products'
  }
} as const
