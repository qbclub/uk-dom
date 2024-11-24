<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/stores/appState'

const appState = useAppStore()
const router = useRouter()
let menu = reactive(


    [
        {
            name: 'Дома ',
            route: '/info/houses',
        },
        {
            name: 'Договоры',
            route: '/info/contracts',
        }, {
            name: 'Отчеты',
            route: '/info/reports',
        },
        {
            name: 'Расчеты',
            route: '/info/calculations',
        },
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


let activeMenu = computed(()=>{
    return menu.findIndex(item => item.route == appState.activeSubMenuRoute);
})

let routeTo = (route)=>{
    appState.activeMenu = 3 //это меню информация
    router.push(route)
    appState.activeSubMenuRoute = route
}

</script>
<template>
{{ appState.activeSubMenu }}
    <v-row>
        <v-col class="d-flex justify-center flex-wrap">

            <v-btn-toggle color="primary" v-model="activeMenu" group>
            <v-btn  v-for="item in menu"  size="small" :ripple="false" @click = routeTo(item.route)>
                {{ item.name }}
            </v-btn>
            </v-btn-toggle>

        </v-col>
    </v-row>

</template>