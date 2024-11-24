<script lang="ts" setup>
import BottomMenu from '~/components/BottomMenu.vue';
import MobileMenu from '~/components/MobileMenu.vue';
let drawer = ref(null)



</script>

<template>
  <v-app style="position: relative;">

    <v-container class="header-container">
      <v-row>
        <v-col class="d-flex align-center justify-space-between pt-0 pb-0">
          <div>
            <img style="width:200px" src="../assets/images/dom.svg" alt="">
          </div>
          <div class="text font-weight-bold">
            тел. 8 (34141)50762
          </div>
          <div></div>


        </v-col>
      </v-row>

    </v-container>
    <v-container class="top-menu-wrapper  ">
      <v-row class="top-menu">
        <v-col>
          <TopMenu class="d-none d-md-block" />
          <div class="d-flex justify-end d-md-none">
            <v-icon icon="mdi-menu" @click.stop="drawer = !drawer"></v-icon>
          </div>

        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer :width="250" v-model="drawer" temporary>
      <MobileMenu />
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <NuxtPage />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="primary" style="max-height: 120px;">
      <v-row justify="center" no-gutters>
        <div>
          <BottomMenu />

          <div class="text-center">
            <a href="https://qbit-club.com" target="_blank" style="user-select: none;">
              <img src="../assets/images/madewithlove.svg" alt="Кубит сделано с любовью"
                style="user-select: none; height: 50px;">
            </a>
          </div>
        </div>

      </v-row>
    </v-footer>
  </v-app>





</template>

<style lang="css" scoped>
.top-menu-wrapper {
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: white;
  display: flex;
  justify-content: center;

}

.top-menu {
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>
