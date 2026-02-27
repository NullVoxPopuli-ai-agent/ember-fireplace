const sidebarGuides = [
  {
    text: 'Guides',
    link: '/guides',
    items: [
      {
        text: 'Getting Started',
        link: '/guides/getting-started'
      }
    ]
  },
  {
    text: 'Reactivity',
    items: [],
  },
  {
    text: 'Template System',
    link: '/guides/templates',
    items: [
      {
        text: 'Basics',
        link: '/guides/templates/basics'
      },
      {
        text: 'Syntax',
        collapsed: true,
        items: [
          { text: '{{on ...}}', link: '/guides/templates/on' },
          { text: '{{fn ...}}', link: '/guides/templates/fn' },
          { text: '{{element ...}}', link: '/guides/templates/element' },
          { text: '{{component ...}}', link: '/guides/templates/component' },
          { text: '{{#let ...}}', link: '/guides/templates/let' },
          { text: '{{#in-element ...}}', link: '/guides/templates/in-element' },
          { text: 'Control Structures<span></span>', },
          { text: '{{if ...}}', link: '/guides/templates/if-inline' },
          { text: '{{#if ...}}', link: '/guides/templates/if-block' },
          { text: '{{#each ...}}', link: '/guides/templates/each' },
          { text: '{{#each-in ...}}', link: '/guides/templates/each-in' },
          { text: 'Truth Helpers<span></span>', },
          { text: '{{not ...}}', link: '/guides/templates/not' },
          { text: '{{eq ...}}', link: '/guides/templates/eq' },
          { text: '{{neq ...}}', link: '/guides/templates/neq' },
          { text: '{{and ...}}', link: '/guides/templates/and' },
          { text: '{{or ...}}', link: '/guides/templates/or' },
          { text: '{{lt ...}}', link: '/guides/templates/lt' },
          { text: '{{lte ...}}', link: '/guides/templates/lte' },
          { text: '{{gt ...}}', link: '/guides/templates/gt' },
          { text: '{{gte ...}}', link: '/guides/templates/gte' },
          { text: 'Utils<span></span>', },
          { text: '{{uniqueId}}', link: '/guides/templates/unique-id' },
          { text: '{{array ...}}', link: '/guides/templates/array' },
          { text: '{{hash ...}}', link: '/guides/templates/hash' },
          { text: '{{log ...}}', link: '/guides/templates/log' },
        ]
      },
      { text: 'Components', link: '/guides/templates/components' },
      { text: 'Helpers', link: '/guides/templates/helpers' },
      { text: 'Modifiers', link: '/guides/templates/modifiers' },
    ]
  },
  {
    text: 'Routing',
    items: []
  },
  {
    text: 'Concepts',
    items: [
      {
        text: 'Dependency Injection',
        link: '/guides/concepts/dependency-injection'
      },
      {
        text: 'Resources',
        link: '/guides/concepts/resources'
      },
      {
        text: 'Lifetimes',
        link: '/guides/concepts/lifetimes'
      },
      {
        text: 'Services',
        link: '/guides/concepts/services'
      }
    ]
  },
  {
    text: 'Testing',
    items: [
      { text: 'Setting up Vitest' },
      { text: 'Unit Tests' },
      { text: 'Rendering Tests' }
    ]
  },
  {
    text: 'Configuration',
    items: [
      { text: 'Runtime', link: '/guides/config/runtime' }
    ]
  },
  {
    text: 'Advanced Topics',
    items: [
      { text: 'Managers', link: '/guides/advanced/managers' }
    ]
  }
];

export { sidebarGuides };
