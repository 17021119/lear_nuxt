import Layout from "./layout"

const VModal = {
    install(Vue) {
        this.EventBus = new Vue();

        Vue.component("v-modal", Layout);

        Vue.prototype.$modal = {
            open(param) {
                VModal.EventBus.$emit("open", param);
            },
            close(param) {
                VModal.EventBus.$emit("close", param);
            }
        }
    }
}

export default VModal;