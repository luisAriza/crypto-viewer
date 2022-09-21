import { createStore } from "vuex";

interface Data {
  textSearch: string;
  coins: object[];
  filteredCoins: object[];
  titles: string[];
}

export default createStore({
  state(): Data {
    return {
      textSearch: "",
      coins: [],
      filteredCoins: [],
      titles: ["#", "coins", "price", "price change", "24h volume"],
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
