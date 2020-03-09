<template>
  <div id="app">
    <Header/>
    <SearchFilter/>
    <main class="app-main">
      <section class="app-main__container">
        <SortFilter/>
          <Buffer>
            <Announcement/>
          </Buffer>
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
import Buffer from "@/ui-kit/Buffer";

export default {
  name: 'App',
  components: {
    Buffer,
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
</style>
