<script lang="ts" setup>
import TopMenu from '~/components/TopMenu.vue';


</script>

<template>
  <v-app style="position: relative;">

    <v-container style="position: fixed; top: 0; left: 0; right: 0; background: white; z-index: 1;">
      <v-row>
        <v-col class="d-flex align-center justify-space-between pt-0 pb-0">
          <div>
            <img style="width:200px" src="../assets/images/dom.svg" alt="">
          </div>
          <div class="text font-weight-bold">
            тел. 8 (34141)50762
          </div>
          <v-icon icon="mdi-menu"></v-icon>

        </v-col>
      </v-row>
      <TopMenu />
    </v-container>


    <v-main style="margin-top:180px">
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
          <div>
            <v-btn v-for="link in 5" class="mx-2" color="white" rounded="xl" variant="text">
              {{ link }}
            </v-btn>
          </div>

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

<style lang="scss" scoped></style>
