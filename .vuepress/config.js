const sidebar = [
    {
        title: 'Repositories',
        children: [
        	'/repositories/webradio-to-spotify.md',
        	'/repositories/sentiment-classifier.md',
        ]
    },
]

module.exports = {
  title: 'Eric Daoud',
  description: 'All my code',
  themeConfig: {
  	sidebar: sidebar,
  	sidebarDepth: 1,
  }
};