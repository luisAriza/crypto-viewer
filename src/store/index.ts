import { createStore } from "vuex";

type Coins = {
  coins: object[];
  filteredCoins: object[];
}

export default createStore({
  state(): Coins {
    return {
      coins: [],
      filteredCoins: [],
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
