<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <button class="btn btn-primary" @click = "increase(10)">++</button>
    </div>
    <div class="col-sm-6">
      <button class="btn btn-primary" @click = "decrease(10)">--</button>
    </div>
  </div>
</div>

</template>
<script>
  import {mapMutations} from "vuex"
  import {mapActions} from "vuex"
export default {

  //  methods:{
  //    ...mapMutations([
  //      'increase',
  //      'decrease'
  //    ])
  //  }
  methods:{
    ...mapMutations([
      'increase',
      'decrease'
    ])
    // increase(by){
    //   this.$store.dispatch("increase",by);
    // }


  }

}
</script>
