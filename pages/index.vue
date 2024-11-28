<script setup lang="ts">
import Contacts from './Info/Contacts.vue';
import Requisites from './Info/Requisites.vue';

</script>

<template>
   <v-row>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100" hover>
            <v-card-item>
               <div>
                  <img style="height:20px" src="~/assets/images/gosuslugi.png"></img>
               </div>
               <Gosuslugi />
            </v-card-item>
         </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100" hover>
            <v-card-item>
               <v-card-title class="text-end">
                  Контакты
               </v-card-title>
               <v-divider color="accent" thickness="3" class="border-opacity-100"></v-divider>
            </v-card-item>
            <Contacts />

         </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100" hover>
            <v-card-item>
               <v-card-title class="text-end">
                  График работы
               </v-card-title>
               <v-divider color="accent" thickness="3" class="border-opacity-100"></v-divider>

            </v-card-item>

            <div class=" d-flex  align-center pa-4">
               <p> Пн <br>
                  Вт <br>
                  Ср <br>
                  Чт <br>
                  Пт

               </p>
               <p class=" w-100 text-center font-weight-bold">с 9.00 до 17.00</p>

            </div>
         </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
         <v-card class="mx-auto h-100" hover>
            <v-card-item>
               <v-card-title class="text-end">
                  Сроки приема показаний
               </v-card-title>
               <v-divider color="accent" thickness="3" class="border-opacity-100"></v-divider>
            </v-card-item>
            <div class="pa-4">
               <p>Электричество</p>
              <div><a href="https://udm.esplus.ru/" target="_blank"><img style="width:100px" src="~/assets/images/Energo.png" alt=""></a>
               <b class="ml-4">c 15 по 25 число</b></div> 
               <p>Вода, тепло</p>
               <a href="https://www.rusatom-utilities.ru/consumers/glazov/submit-meter-readings/" target="_blank"><img style="width:100px" src="~/assets/images/rir.svg" alt=""></a>
               <b class="ml-4">c 20 по 25 число</b>
            </div>

         </v-card>
      </v-col>

   </v-row>

</template>
<style scoped></style>