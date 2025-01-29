<template>
    <div class="text-center">
        <img style="width:200px" src="../assets/images/dom.svg" alt="">
    </div>
    <div class="d-flex align-center flex-column">
        <v-divider class="w-100"></v-divider>
        <NuxtLink to="/">
            <v-list-item link title="Главная"></v-list-item>
        </NuxtLink>
        <NuxtLink to="/houses">
            <v-list-item link title="Дома"></v-list-item>
        </NuxtLink>
    
        <v-divider class="w-100"></v-divider>
        <!-- <NuxtLink to="/info/houses">
            <v-list-item link title="Дома"></v-list-item>
        </NuxtLink> -->
        <NuxtLink to="/info/documents">
            <v-list-item link title="Документы"></v-list-item>
        </NuxtLink>
        
        <!-- <NuxtLink to="/info/contracts">
            <v-list-item link title="Договоры"></v-list-item>
        </NuxtLink>
        <NuxtLink to="/info/reports">
            <v-list-item link title="Отчеты"></v-list-item>
        </NuxtLink>
        <NuxtLink to="/info/calculations">
            <v-list-item link title="Расчеты"></v-list-item>
        </NuxtLink> -->
        <v-divider class="w-100"></v-divider>
        <NuxtLink to="/info/requisitespage">
            <v-list-item link title="Реквизиты"></v-list-item>
        </NuxtLink>
        <NuxtLink to="/info/contactspage">
            <v-list-item link title="Контакты"></v-list-item>
        </NuxtLink>

    </div>


</template>