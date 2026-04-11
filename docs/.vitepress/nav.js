const nav = [
  {
    text: 'Documentation',
    items: [
      { text: 'Guides', link: '/guides' },
      { text: 'Tooling', link: '/tooling' },
      { text: 'Cookbook', link: '/cookbook' },
      { text: 'Tutorial', link: 'https://guides.emberjs.com/release/tutorial/' },
      {
        text: 'Handbooks',
        items: [
          { text: 'Component Architecture', link: '/component-architecture' }
        ]
      },
      { 
        text: 'References', 
        items: [
          { text: 'API Reference', link: 'https://api.emberjs.com/' }
        ]
      }
    ]
  },
  {
    text: 'Releases',
    items: [
      { text: 'Overview', link: 'https://emberjs.com/releases' },
      { text: '-> LTS', link: 'https://emberjs.com/releases/lts' },
      { text: '-> Stable', link: 'https://emberjs.com/releases/stable' },
      { text: '-> Beta', link: 'https://emberjs.com/releases/beta' },
      { text: '-> Canary', link: 'https://emberjs.com/releases/canary' },
      { 
        items: [
          { text: 'Editions', link: 'https://emberjs.com/releases/editions' },
          { text: 'Browser Support', link: 'https://emberjs.com/releases/browser-support' },
          { text: 'Node Support', link: 'https://emberjs.com/releases/node-support' },
          { text: 'TypeScript Support', link: 'https://emberjs.com/releases/typescript-support' },
          { text: 'Deprecations', link: 'https://deprecations.emberjs.com' },
          { text: 'RFCs', link: 'https://rfcs.emberjs.com' }
        ]
      }
    ]
  },
  { text: 'Playground', link: '/playground' },
  { text: 'Blog', link: 'https://blog.emberjs.com/' },
  { 
    text: 'Community', 
    items: [
      { text: 'The Ember Community', link: 'https://emberjs.com/community' },
      { text: 'Guidelines', link: 'https://emberjs.com/guidelines' },
      { text: 'Resources', link: '/resources' },
      { text: 'Ecosystem', link: '/ecosystem' },
      { 
        items: [
          { text: 'Help Wanted', link: 'https://help-wanted.emberjs.com' },
          { text: 'Ember Community Survey', link: 'https://emberjs.com/survey' }
        ]
      },
      {
        items: [
          { text: 'EmberConf', link: 'https://emberconf.com' },
          { text: 'EmberFest', link: 'https://emberfest.eu' },
          { text: 'Meetups', link: 'https://emberjs.com/community/meetups' }
        ]
      },
      {
        items: [
          { text: 'Black Lives Matter', link: 'https://emberjs.com/community/black-lives-matter' },
          { text: 'Support Ukraine', link: 'https://emberjs.com/community/invasion-of-ukraine' }
        ]
      }
    ]
  }
];

export {nav};
