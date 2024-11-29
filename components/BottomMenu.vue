<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/stores/appState'
import topMenu from '~/utils/topMenu'
const appState = useAppStore()

const router = useRouter()
let menu = reactive(
    [
        {
            name: 'Реквизиты',
            route: '/info/requisitespage',
        },
        {
            name: 'Контакты',
            route: '/info/contactspage',
        },
    ]
)



let routeTo =  (route) => {
    appState.activeMenu = topMenu.findIndex(item => item.route == '/info');
    router.push(route)
    appState.activeSubMenuRoute = route
   

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