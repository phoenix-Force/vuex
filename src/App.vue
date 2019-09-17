<template>
  <div class ="container" id="app">
    <h1 class="text-danger">VueX</h1>
    <hr>
    <show-res></show-res>
    <another-result></another-result>
    <hr>
    <click-btn></click-btn>
  </div>
</template>

<script>
import Btn from "./components/Button.vue"
import Res from "./components/Result.vue"
import AnotherResult from "./components/AnotherResult.vue"
export default {
  components:{
    clickBtn:Btn,
    showRes:Res,
    anotherResult:AnotherResult
  }

}
</script>

<style lang="scss">

</style>
