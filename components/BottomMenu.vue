<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/stores/appState'

const appState = useAppStore()

const router = useRouter()
let menu = reactive(


    [
        {
            name: 'Реквизиты',
            route: '/info/requisites',
        },
        {
            name: 'Контакты',
            route: '/info/contacts',
        },


    ]
)

let routeTo = (route, index) => {
   
    appState.activeSubMenuRoute = route
    router.push(route)
    appState.activeMenu = 3
  
   
    
    // router.push(route)
}


</script>
<template>

    <v-row>
        <v-col class="d-flex justify-center flex-wrap">
            <v-btn v-for="item, index in menu" :key="index" variant="text" size="small" :ripple="false"
                @click=routeTo(item.route)>
                {{ item.name }}
            </v-btn>

        </v-col>
    </v-row>

</template>