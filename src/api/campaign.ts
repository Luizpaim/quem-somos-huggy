import { Api } from './api'

export interface IPostCampaign {
  id_da_campanha: string
  nome: string
  email: string
}

export const ApiPostCampaign = async (payload: IPostCampaign) => {
  const { data } = await Api.post('/api/campaign', payload)
  return data
}
