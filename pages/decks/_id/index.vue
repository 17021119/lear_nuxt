<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: #{{ $route.params.id }}: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create a card
          </button>
        </div>

        <hr class="divide" />

        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>

        <v-modal name="CreateDeckModal">
          <div class="modal_body">
            <h1>Create a new Deck</h1>
            <form action>
              <div class="form_group">
                <label for>Name:</label>
                <input
                  class="form_control"
                  type="text"
                  placeholder="Please enter name deck"
                />
              </div>

              <div class="form_group">
                <label for>Description:</label>
                <textarea
                  class="form_control"
                  name
                  id
                  cols="30"
                  rows="4"
                  placeholder="Please enter description"
                ></textarea>
              </div>

              <div class="form_group">
                <label for>Thumbnail :</label>
                <input type="file" />
                <div class="preview"></div>
              </div>

              <div class="form_group d_flex justify_content_end">
                <button class="btn btn_danger" @click="closeModal">
                  Close
                </button>
                <!-- <button class="btn btn_success ml_3" @click="createDeck">Create</button> -->
              </div>
            </form>
          </div>
        </v-modal>
      </div>
    </div>
  </section>
</template>


<script>
import CardList from "@/components/card/CardList.vue";
export default {
  components: {
    CardList,
  },
  asyncData(context) {
    console.log(context);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          deck: {
            _id: 1,
            name: `Learn by ${context.params.id}`,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            thumbnail: "https://wallpaperaccess.com/full/6617143.png",
          },
        });
      }, 1500)
    }).then(data=>{
      return data;
    })
    .catch(e =>{
      console.log(e);
    })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword: "Shop",
        },
        {
          _id: 2,
          picture:
            "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword: "Shop",
        },
        {
          _id: 3,
          picture:
            "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword: "Shop",
        },
        {
          _id: 4,
          picture:
            "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword: "Shop",
        },
        {
          _id: 5,
          picture:
            "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword: "Shop",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "CreateDeckModal" });
    },
    closeModal() {
      this.$modal.close({ name: "CreateDeckModal" });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 2rem 0;
  }
}
</style>