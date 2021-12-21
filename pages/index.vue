<template>
  <div>
    <div class="ct banner">
      <div class="thumbnail-banner"></div>
    </div>

    <div class="popular-decks">
      <h3 class="text_center my_3">3 Popular decks for you</h3>

      <div class="r">
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>


        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>


        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.banner{
  height: 220px;
  margin-top: 3rem;
  .thumbnail-banner{
    background: url('~assets/img/banner.jpg') center center no-repeat;
    height: inherit;
    background-size: cover;
  }
}
</style>