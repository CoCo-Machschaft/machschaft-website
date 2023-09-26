import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6f0b4c7e438644dcb2edd6f1e16e73f5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Fachschaft Code & Context',
  domain: 'coco-machschaft.de',
  author: 'Fachschaft Code & Context',

  // open graph metadata (optional)
  description: 'Website der Fachschaft Code & Context',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'CoCo-Machschaft',
  linkedin: 'company/98169914',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '6f0b4c7e438644dcb2edd6f1e16e73f5'
    },
    {
      title: 'Council',
      pageId: '2ebd06e302fb4e779bb7e27a71775ec6'
    },
    {
      title: 'Links',
      pageId: 'dabd33be8a754e1a9b215ec6de9242e1'
    },
    {
      title: 'F.A.Q.',
      pageId: 'c97700c0716949bb98665a8862c1b7dc'
    },
    {
      title: 'Imprint',
      pageId: '7292c61f69634bd8ae805876ce2661e3'
    },
    {
      title: 'Privacy',
      pageId: '6dabe3a2a684412da820fed354fb8bda'
    }
  ]
})
