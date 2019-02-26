<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  created () {
    console.log(process)
  }
}
</script>

<style lang="less" scoped>
@import "./style/index.less";
</style>
