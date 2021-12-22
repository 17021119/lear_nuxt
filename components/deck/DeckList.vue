<template>
  <li>
    <nuxt-link class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />

        <div class="card_body">
          <h3>{{name}}</h3>
          <p>{{description}}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    id:{
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
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
</style>
