import { fbq } from './config'

export const seAvailablePositionsFacebook = () => {
  fbq('track', 'Click', {
    content_name: 'Ver vagas disponíveis',
    content_category: 'button'
  })
}
