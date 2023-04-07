import { defineStore } from 'pinia'
import { ApiPostCampaign, type IPostCampaign } from '@/api/campaign'

export const Campaign = defineStore('Campaign', {
  actions: {
    async PostCampaign(payload: IPostCampaign) {
      await ApiPostCampaign(payload)
    }
  }
})
