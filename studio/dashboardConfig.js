export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-curitibajs-studio',
                  apiId: '261ded40-d7dd-4eb3-b2c0-74a369173fcd'
                },
                {
                  buildHookId: '5d817edf6c4c8cb70c934365',
                  title: 'Events Website',
                  name: 'sanity-nuxt-curitibajs',
                  apiId: '5abaf79f-b7e4-4abd-b6bd-8fcc43e3bf86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trickstival/sanity-nuxt-curitibajs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-curitibajs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
