<template>
  <div class="c">
    <div class="d_flex justify_content_between my_3">
      <h3>List of your decks:</h3>
      <button class="btn btn_success" @click.prevent="openModal">Create a Deck</button>
    </div>
    <ul class="deck-list">
      <li v-for="item in decks" :key="item._id">
        <nuxt-link class="deck" :to="`/decks/${_id}`">
          <div class="card deck-card">
            <img :src="item.thumbnail" :alt="`Thumbnail of ${item.name}`" />

            <div class="card_body">
              <h3>{{item.name}}</h3>
              <p>{{item.description}}</p>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>

    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h1>Create a new Deck</h1>
        <form action>
          <div class="form_group">
            <label for>Name:</label>
            <input class="form_control" type="text" placeholder="Please enter name deck" />
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
            <button class="btn btn_danger" @click="closeModal">Close0</button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>


<script>
export default {
  data() {
    return {
      decks: [
        {
          _id: 1,
          name: "Learn English",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          thumbnail: "https://wallpaperaccess.com/full/6617143.png"
        },
        {
          _id: 2,
          name: "Learn Chinese",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          thumbnail: "https://wallpaperaccess.com/full/6617143.png"
        },
        {
          _id: 3,
          name: "Learn Japanese",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          thumbnail: "https://wallpaperaccess.com/full/6617143.png"
        }
      ]
    };
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "CreateDeckModal" });
    },
    closeModal() {
      this.$modal.close({ name: "CreateDeckModal" });
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