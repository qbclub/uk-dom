<script setup lang="ts">
import Contacts from './Info/Contacts.vue';

</script>

<template>
   <v-row>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100"  hover>
            <v-card-item>
               <div >
                  <img style="height:20px" src="../assets/images/gosuslugi.png"></img>
               </div>
               <Gosuslugi />
            </v-card-item>
         </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100"  hover>
            <v-card-item>
               <v-card-title>
                  Контакты
               </v-card-title>
               <v-divider color="accent" length="30%" thickness="5" class="border-opacity-100"></v-divider>

            </v-card-item>
           <Contacts/>
         </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100"  hover>
            <v-card-item>
               <v-card-title>
                  График работы
               </v-card-title>
               <v-divider color="accent" length="30%" thickness="5" class="border-opacity-100"></v-divider>

            </v-card-item>

            <v-card-text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua.
            </v-card-text>
         </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100"  hover>
            <v-card-item>
               <v-card-title>
                  Реквизиты
               </v-card-title>
               <v-divider color="accent" length="30%" thickness="5" class="border-opacity-100"></v-divider>

            </v-card-item>

            <v-card-text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua.
            </v-card-text>
         </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100"  hover>
            <v-card-item>
               <v-card-title>
                  Сроки приема показаний <br>
                  приборов учета
               </v-card-title>
               <v-divider color="accent" length="30%" thickness="5" class="border-opacity-100"></v-divider>

            </v-card-item>

            <v-card-text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua.
            </v-card-text>
         </v-card>
      </v-col>

   </v-row>

</template>
<style scoped>


</style>