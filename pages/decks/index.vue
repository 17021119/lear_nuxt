<template>
  <div class="c">
    <div class="d_flex justify_content_between my_3">
      <h3>List of your decks:</h3>
      <button class="btn btn_success" @click.prevent="openModal">Create a Deck</button>
    </div>
    <ul class="deck-list">
      <deck-list
        v-for="deck in decks"
        :key="deck._id"
        :id="deck._id"
        :name="deck.name"
        :thumbnail="deck.thumbnail"
        :description="deck.description"
      ></deck-list>
    </ul>

    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h1>Create a new Deck</h1>
        <deck-form  @submit="onSubmit"/>
      </div>
    </v-modal>
  </div>
</template>


<script>
import axios from "axios"


import DeckList from "@/components/deck/DeckList.vue";
import DeckForm from "@/components/deck/DeckForm.vue"
export default {
  components: {
    DeckList,
    DeckForm
  },
  // fetch(context,) {
  //   console.log("fetch is excuted");
  //   console.log(context);

  //   return new Promise((resolve, reject) =>{
  //     setTimeout(()=>{
  //       resolve({
  //         decks: [
  //         {
  //           _id: 1,
  //           name: "Learn English",
  //           description:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //           thumbnail: "https://wallpaperaccess.com/full/6617143.png"
  //         },
  //         {
  //           _id: 2,
  //           name: "Learn Chinese",
  //           description:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //           thumbnail: "https://wallpaperaccess.com/full/6617143.png"
  //         },
  //         {
  //           _id: 3,
  //           name: "Learn Japanese",
  //           description:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //           thumbnail: "https://wallpaperaccess.com/full/6617143.png"
  //         }
  //       ]
  //       })
  //     }, 1500)
  //     // reject(new Error())
  //   })
  //   .then(data =>{
  //     // return data;
  //     context.store.dispatch("setDecks", data.decks);
  //   })
  //   .catch(e =>{
  //     // console.log(e);
  //     context.error(e);
  //   })
    
  // },
  // created() {
  //   this.$store.dispatch('setDecks', this.decks);
  //   console.log("create in decks.vue");
  //   console.log(this.$store.getters.decks);
  // },
  computed: {
    decks(){
      return this.$store.getters.decks;
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "CreateDeckModal" });
    },
    onSubmit(deckData){ 
      console.log(deckData);
      axios.post('https://nuxt-learning-english-ab7f2-default-rtdb.firebaseio.com/decks.json', deckData)
        .then(data=>{
          console.log(data);
        }).catch(e => {
          console.log(e);
        })
    }
    
  }
};
</script>

<style lang="scss" scoped>
.deck-list {
  margin: 0;
  padding: 0;
  .deck {
    display: block;
  }
  li {
    list-style: none;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: auto;
    }
  }
}
</style>