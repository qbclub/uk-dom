<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/stores/appState'

const appState = useAppStore()
const router = useRouter()
let menu = reactive(

    [
        // {
        //     name: 'Дома ',
        //     route: '/info/houses',
        // },
        {
            name: 'Документы',
            route: '/info/documents',
        },
        // {
        //     name: 'Договоры',
        //     route: '/info/contracts',
        // }, 

        // {
        //     name: 'Отчеты',
        //     route: '/info/reports',
        // },
        // {
        //     name: 'Расчеты',
        //     route: '/info/calculations',
        // },
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


let activeSubMenu = ref(menu.findIndex(item => item.route == appState.activeSubMenuRoute))

watch(appState, ()=>{
    activeSubMenu.value =  menu.findIndex(item => item.route == appState.activeSubMenuRoute)
})



let routeTo = (route) => {
    appState.activeSubMenuRoute = route
    router.push(route)
   
}

</script>
<template>
    <v-row>
        <v-col class="d-flex justify-center flex-wrap">

            <v-btn-toggle color="primary" v-model="activeSubMenu" group>
                <v-btn v-for="item in menu" size="small" :ripple="false" @click=routeTo(item.route)>
                    {{ item.name }}
                </v-btn>
            </v-btn-toggle>

        </v-col>
    </v-row>

</template>