<template>
  <div id="app">
    <section class="index">
      <div class="index-message" v-on:click="toggleThings">
        <p>{{ msg }}</p>
        <div v-if="seen">
          <p>I haz dez:</p>
          <ul>
            <li v-for="thing in things">
              {{ thing.msg }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Sup htmls!',
        seen: false,
        things: [
          {msg: 'Vue'},
          {msg: 'TypeScript'},
          {msg: 'Sass'},
          {msg: 'Parcel'},
        ]
      }
    },
    methods: {
      toggleThings: function () {
        this.seen = this.seen ? false : true;
      }
    }
  }
</script>
