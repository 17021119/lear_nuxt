<template>
  <form @submit.prevent="onSave">
    <div class="form_group">
      <label for>Name:</label>
      <input
        class="form_control"
        type="text"
        placeholder="Please enter name deck"
        v-model="editDeck.name"
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
        v-model="editDeck.description"
      ></textarea>
    </div> 

    <div class="form_group">
      <label for>Thumbnail :</label>
      <!-- <input type="file" /> -->
      <input type="text" placeholder="https://example.com/foo.png" class="form_control" v-model="editDeck.thumbnail"/>
      <div class="preview"></div>
    </div>

    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" @click.prevent="closeModal">Close</button>
      <button
        class="btn btn_success ml_3"
        type="submit"
      >
        Create
      </button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    deck: {
      type: Object,
      default() {
        return {
          name: "",
          description: "",
          thumbnail: "",
        };
      },
    },
  },
  data() {
    return {
      editDeck: this.deck
        ? { ...this.deck }
        : { name: "", description: "", thumbnail: "" },
    };
  },
  methods: {
    onSave() {
        console.log(this.editDeck);
        this.$emit("submit", this.editDeck);
    },
    closeModal() {
      this.$modal.close({ name: "CreateDeckModal" });
    },
  },
};
</script>