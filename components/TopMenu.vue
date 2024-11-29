<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '~/stores/appState'
import menu from '../utils/topMenu'
const appState = useAppStore()

const router = useRouter()

watch(() => appState.activeMenu, (newMenu, oldMenu) => {

    if (menu[appState.activeMenu].route == '/info') {  
        router.push(appState.activeSubMenuRoute)
    } else {
        appState.activeMenuRoute = menu[appState.activeMenu].route
        router.push(menu[appState.activeMenu].route)
    }
  
    
})


</script>
<template>
    <v-row>
        <v-col>
            <v-btn-toggle color="primary" v-model="appState.activeMenu" group>
                <v-btn :value="item.index" v-for="item in menu" :ripple="false">
                    {{ item.name }}
                </v-btn>
            </v-btn-toggle>
        </v-col>
    </v-row>
</template>