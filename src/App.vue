<template>
  <div id="app">
    <Header/>
    <SearchFilter/>
    <main class="app-main">
      <section class="app-main__container">
        <SortFilter/>
        <div class="body-content">
          <Announcement/>
          <Article/>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SearchFilter from "@/components/SearchFilter";
import Footer from "@/components/Footer";
import SortFilter from "@/components/SortFilter";
import Announcement from "@/components/Announcement";
import Article from "@/components/Article";

export default {
  name: 'App',
  components: {
    Article,
    Announcement,
    SortFilter,
    Header,
    SearchFilter,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
  #app {
}

  .app-main {
    background-color: map_get($colors, background-primary);
  }

  .app-main__container {
   @include layout;
    flex-direction: column;
  }

  .body-content {
    display: flex;
    margin: map_get($grid-spacing, xl) 0;
  }
</style>
