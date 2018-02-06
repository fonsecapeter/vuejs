<template>
  <div id="app">
    <section class="index">
      <div class="index-message">
        {{ msg }}
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Sup htmls!'
      }
    }
  }
</script>
