<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click='changeStatus'>Essential Links</h2>
    <p> mkll {{status}} </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      msg: 'HelloWorld',
      status: false
    }
  },
  methods: {
    changeStatus: function () {
      let oldStatus = this.status
      this.status = !oldStatus
      console.log(this.status)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
