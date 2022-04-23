<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<script lang="ts">
  import type { Header } from './header';
  let headers: Array<Header> = [];
  export { headers };
</script>
<style lang="scss">
.header {
  list-style-type: none;
}
.header-link.depth-3 {
  padding-left: 2rem;
}
.header-link.depth-4 {
  padding-left: 3rem;
}
</style>
<h2 class="heading">On this page</h2>
<ul class="header">
  <li class="header-link depth-2">
    <a href="#overview">Overview</a>
  </li>
  {#each headers as header}
    <li class="header-link depth-{header.depth}">
      <a href=#{header.slug}>{header.text}</a>
    </li>
  {/each}
</ul>
