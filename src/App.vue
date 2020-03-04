<template>
  <div id="app">
    <Header/>
    <SearchFilter/>
    <main class="app-main">
      <SortFilter/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SearchFilter from "@/components/SearchFilter";
import Footer from "@/components/Footer";
import SortFilter from "@/components/SortFilter";

export default {
  name: 'App',
  components: {
    SortFilter,
    Header,
    SearchFilter,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
  #app {
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

  .app-main {
    background-color: map_get($colors, background-primary);
  }
  
</style>
