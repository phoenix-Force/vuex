<template>
<div class="containner">
  <div class="row text-center">
    <h2 >{{counter}}</h2>
  </div>
</div>
</template>
<script>
export default {
  computed:{
    counter(){
    return this.$store.state.doubleCounter

  }
}
}
</script>
