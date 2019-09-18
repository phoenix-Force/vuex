<template>
<div class="containner">
  <div class="row text-center">
    <h2 >{{doubleCounter}}</h2>
  </div>
</div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters([
      'doubleCounter'

    ])
    //  increase(){
    //   this.$store.commit("increase")
    // },
    // decrease(){
    //   this.$store.commit("decrease")
    // }
  }
}
</script>
