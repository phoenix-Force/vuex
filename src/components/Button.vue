<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <button class="btn btn-primary" @click = "increase">++</button>
    </div>
    <div class="col-sm-6">
      <button class="btn btn-primary" @click = "decrease">--</button>
    </div>
  </div>
</div>

</template>
<script>
export default {
  methods:{
    increase(){
      this.$store.commit("increase")
    },
    decrease(){
      this.$store.commit("decrease")
    }
  }

}
</script>
