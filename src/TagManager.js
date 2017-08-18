import Snippets from './Snippets'

const TagManager = {
  gtm: function (args) {
    const snippets = Snippets(args)

    const noScript = () => {
      const noscript = document.createElement('noscript')
      noscript.innerHTML = snippets.iframe
      return noscript
    }

    const script = () => {
      const script = document.createElement('script')
      script.innerHTML = snippets.script
      return script
    }

    const dataScript = () => {
      const script = document.createElement('script')
      script.innerHTML = snippets.dataLayerVar
      return script
    }

    return {
      noScript,
      script,
      dataScript
    }
  },
  initialize: function ({ gtmId, events = {}, dataLayer, dataLayerName = 'dataLayer' }) {
    const gtm = this.gtm({
      id: gtmId,
      events: events,
      dataLayer: dataLayer || null,
      dataLayerName: dataLayerName
    })
    if (dataLayer) document.head.appendChild(gtm.dataScript())
    document.head.appendChild(gtm.script())


    const first = document.body.children[0]
    console.log(first)
    document.body.insertBefore(gtm.noScript(), first)
    const firstAfter = document.body.children[0]
    console.log(firstAfter)
  }
}

module.exports = TagManager
