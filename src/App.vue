<template>
  <div class ="container" id="app">
    <h1 class="text-danger">VueX</h1>
    <hr>
    <show-res></show-res>
    <another-result></another-result>
    <hr>
    <click-btn></click-btn>
    <another-counter></another-counter>
    <input type="text" name="val" id="val" @input = "updateValue" :value = "get">
    <p>{{get}}//value//
    </p>
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
  },
  methods:{
     updateValue(event){
      this.$store.dispatch('updateValue',event.target.value)
    }
  },
  computed:{
    //  value(){
    //   return this.$store.getters.value

    //   }
    get (){
     return this.$store.getters.value
    },
    set(value){
      this.$store.dispatch('updateValue',value)
    }
    }


}
</script>

<style lang="scss">

</style>
