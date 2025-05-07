import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
  state: () => ({

    app: null,

  }),
  actions: {

    // async getFound(apiRoute, locale, id) {
    //   const { find } = useStrapi()
    //   const res = await find(apiRoute, { 
    //     locale: locale,
    //     filter: { documentId: { $eq: id } },
    //     populate: ['manufacturer', 'images']
    //   })
    //   if (res) this.agros = res.data
    // },

  }
})