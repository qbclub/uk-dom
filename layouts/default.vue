<script lang="ts" setup>
import { useAppStore } from '~/stores/appState'

const router = useRouter()
const appState = useAppStore()
let drawer = ref(false)

let routeTo = () => {
  router.push('/')
  appState.activeMenu = 0
  appState.activeMenuRoute = '/'
}

</script>

<template>
  <v-app style="position: relative; ">
    <div class="d-none d-md-block" style="position: absolute; top: 0;right: 0; z-index: 999;">
      <img src="../assets/images/lamp.png" alt="">
    </div>


    <v-container class="header-container top-menu-wrapper ">
      <v-row>
        <v-col class="d-flex align-center justify-space-between pt-0 pb-0 ">

          <div @click="routeTo()" style="cursor: pointer;">
            <img style="width:200px" src="../assets/images/dom.svg" alt="">
          </div>

          <div class="text font-weight-bold d-none d-md-block">
            <a href="tel:89501636022">тел. 89501636022</a>
          </div>
          <div></div>

          <v-icon icon="mdi-menu" @click.stop="drawer = !drawer" class="d-block d-md-none"></v-icon>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="top-menu-wrapper d-none d-md-block" style="min-height: 88px;">
      <v-row>
        <v-col>
          <TopMenu class=" top-menu" />
        </v-col>
      </v-row>
    </v-container>



    <v-navigation-drawer :width="250" v-model="drawer" temporary>
      <MobileMenu />
    </v-navigation-drawer>

    <v-main class="bg-image">
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
  top: 0px;
  z-index: 99;
  background-color: white;


}

.top-menu {
  position: sticky;
  top: 100px;
  z-index: 99;
  background-color: white;
}
</style>
