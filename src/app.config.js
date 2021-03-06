const pages = [
  'pages/index/index',
  'pages/categories/index',
  'pages/talk/index',
  'pages/account/index',
  'pages/about/index',
  'pages/article/index',
  'pages/article/detail',
];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: '日思录',
    navigationBarBackgroundColor: '#1296db',
  },
  tabBar:{
    color:'#000000',
    selectedColor:'#1296db',
    list:[
      {
        pagePath:'pages/index/index',
        text:'首页',
        iconPath:'/icon/home.png',
        selectedIconPath:'/icon/home-active.png'
      },
      {
        pagePath:'pages/categories/index',
        text:'分类',
        iconPath:'/icon/category.png',
        selectedIconPath:'/icon/category-active.png',
      },
      {
        pagePath:'pages/account/index',
        text:'我的',
        iconPath:'/icon/account.png',
        selectedIconPath:'/icon/account-active.png',
      },
      {
        pagePath:'pages/about/index',
        text:'关于',
        iconPath:'/icon/about.png',
        selectedIconPath:'/icon/about-active.png',
      },
      
    ]
  }
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
};
