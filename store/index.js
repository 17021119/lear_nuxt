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
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setDecks', [{
                                _id: 1,
                                name: "Learn English",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                thumbnail: "https://wallpaperaccess.com/full/6617143.png"
                            },
                            {
                                _id: 2,
                                name: "Learn Chinese",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                thumbnail: "https://wallpaperaccess.com/full/6617143.png"
                            },
                            {
                                _id: 3,
                                name: "Learn Japanese",
                                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                thumbnail: "https://wallpaperaccess.com/full/6617143.png"
                            }
                        ])
                        resolve(); // muốn thực thi
                    }, 1500)
                })
            },
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