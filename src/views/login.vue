<template>
  <div class="page">
    <div class="page__head">page__head</div>
    <div class="page__nav">page__nav</div>
    <div class="page__main">page__main</div>
    <div class="page__footer">page__footer</div>
  </div>
</template>
<script>
import utils from '../utils/index.js'
export default {
  
}
</script>
<style lang="scss" scoped>
.page {
    display: grid;
    grid-gap: 33px;
    grid-template:
        "head main" 1fr
        "nav  main " minmax(100px, 1fr)
        "nav  foot" 2fr /
        1fr   100px 1fr;
}
.page__head {
    grid-area: head;
}
.page__nav {
    grid-area: nav;
}
.page__main {
    grid-area: main;
}
.page__footer {
    grid-area: foot;
}
</style>

