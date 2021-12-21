<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: #{{$route.params.id}} Learn English by sky albert</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">Create a card</button>
        </div>

        <hr class="divide" />

        <div class="r">
          <div class="c_3" v-for="card in cards" :key="card.id">
            <div class="card">
              <div class="front-card">
                <img
                  :src="card.picture"
                />
              </div>

              <div class="back-card">
                {{card.keyword}}
              </div>
            </div>
          </div>

          
        </div>

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
                <button class="btn btn_danger" @click="closeModal">Close</button>
                <button class="btn btn_success ml_3" @click="createDeck">Create</button>
              </div>
            </form>
          </div>
        </v-modal>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data(){
    return{
      cards:[
        {
          _id: 1,
          picture: "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword:"Shop"
        },
        {
          _id: 2,
          picture: "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword:"Shop"
        },
        {
          _id: 3,
          picture: "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword:"Shop"
        },
        {
          _id: 4,
          picture: "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword:"Shop"
        },
        {
          _id: 5,
          picture: "https://museums.kenosha.org/public/wp-content/uploads/sites/3/2013/11/IMG_0065.jpg",
          keyword:"Shop"
        }
      ]
    }
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