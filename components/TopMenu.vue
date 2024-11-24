<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/stores/appState'

const appState = useAppStore()

const router = useRouter()
let menu = reactive(

    [{
        name: 'Главная',
        route: '/',
    }, {
        name: 'О нас',
        route: '/about',
    },
    {
        name: 'Услуги',
        route: '/services',
    },
    {
        name: 'Информация',
        route: toRef(appState.activeSubMenuRoute),
    }

    ]
)

let activeMenu = ref(0)

watch(() => appState.activeSubMenuRoute, (newMenu, oldMenu) => {
    activeMenu.value = appState.activeMenu
  
    // router.push(appState.activeSubMenuRoute)
})
watch(activeMenu, (newMenu, oldMenu) => {
 
    if (newMenu != 3) {
        appState.activeMenu = activeMenu.value
        router.push(menu[activeMenu.value].route)      
    } else {
        appState.activeMenu = 3 //это меню информация
        router.push(appState.activeSubMenuRoute)
    }

})

</script>
<template>
    <v-row>
        <v-col>
            <v-btn-toggle color="primary" v-model="activeMenu" group>
                <v-btn :value="item.index" v-for="item in menu" :ripple="false">
                    {{ item.name }}
                </v-btn>
            </v-btn-toggle>
        </v-col>
    </v-row>
</template>