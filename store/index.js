import Vuex from "vuex"

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: [],

        },
        mutations: {
            setDecks(state, data) {
                state.decks = data;
            }
        },
        actions: {
            setDecks(vuexContext, decks) {
                vuexContext.commit('setDecks', decks);
            }
        },
        getters: {
            decks(state) {
                return state.decks;
            }
        }
    })
}

export default createStore;