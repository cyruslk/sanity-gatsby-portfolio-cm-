export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6325e8939eada35bd30d8639',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-cm-studio',
                  apiId: '57f7bb53-d220-4908-84c4-c476e7f3a5d7'
                },
                {
                  buildHookId: '6325e8949eada35bd30d863a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-cm',
                  apiId: 'f929dfd6-dc2e-4861-babc-f742823c876b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cyruslk/sanity-gatsby-portfolio-cm-',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-cm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
