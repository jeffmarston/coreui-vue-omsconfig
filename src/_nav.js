export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'System',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Networking',
      url: '/theme/colors',
      icon: 'icon-drop'
    },
    {
      title: true,
      name: 'Logins',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Services',
      url: '/theme/colors',
      icon: 'icon-drop'
    },
    {
      name: 'Users',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Service Configuration',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Service Configuration',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Analytics',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Audit',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Compliance',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'DataFeed',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Discovery',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'EDIDataHub',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    }
  ]
}
