export function fbq(...args: any[]) {
  if (window.fbq) {
    if (args[0] === 'track' && args[1] === 'Click') {
      args[0] = 'trackCustom'
    }
    window.fbq.apply(null, args)
  } else {
    console.warn('Facebook Pixel not loaded')
  }
}
