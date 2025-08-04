export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  useHead({
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-1WT7R3JBL2',
        async: true
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1WT7R3JBL2');`
      }
    ]
  })
})
