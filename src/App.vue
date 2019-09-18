<template>
  <div class ="container" id="app">
    <h1 class="text-danger">VueX</h1>
    <hr>
    <show-res></show-res>
    <another-result></another-result>
    <hr>
    <click-btn></click-btn>
    <another-counter></another-counter>
  </div>
</template>

<script>
import Btn from "./components/Button.vue"
import Res from "./components/Result.vue"
import AnotherCounter from "./components/AnotherCounter.vue"
import AnotherResult from "./components/AnotherResult.vue"
export default {
  components:{
    clickBtn:Btn,
    showRes:Res,
    anotherResult:AnotherResult,
    anotherCounter:AnotherCounter
  }

}
</script>

<style lang="scss">

</style>
