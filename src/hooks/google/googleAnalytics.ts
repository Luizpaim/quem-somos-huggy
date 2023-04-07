import { useGtag } from 'vue-gtag-next'

const gtag = useGtag()

export const seAvailablePositionsGoogle = () => {
  gtag.event('click', {
    event_category: 'button',
    event_label: 'Ver vagas disponíveis'
  })
}
