<template>
  <div modal="true" @click.prevent="close">
    <div>
      <div v-if="visible" :data-modal="name" class="modal">
        <div aria-modal="true" data-reach-dialog-content="true" tabindex="-1" class="modal__mask">
          <div class="modal__body" @click.stop>
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VModal from "./handle";
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      payload: null,
      visible: false
    };
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on("open", params => {
      if (this.name === params.name) {
        this.open();
      }
    });

    VModal.EventBus.$on("close", params => {
      if (this.name === params.name) {
        this.close();
      }
    });
  },
  methods: {
    open(params) {
      this.visible = true;
      // TODO
    },
    close() {
      this.visible = false;
      // TODO
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
  &__body{
      background-color: #fff;
      padding:20px;
  }
}
</style>