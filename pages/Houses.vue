<script setup>
let houses = [
    { address: "УР, г.Глазов, ул Ленина, 11б" },
    { address: "УР, г.Глазов, ул Ленина, 9б" },
    { address: "УР, г.Глазов, ул Ленина 11в" },
    { address: "УР, г.Глазов, ул Ленина 7а" },
    { address: "УР, г.Глазов, ул Ленина 5в" },
    { address: "УР, г.Глазов, ул Короленко 23б" },
    { address: "УР, г.Глазов, ул Короленко 25в" },
    { address: "УР, г.Глазов, ул Короленко 25б" },
  
]
</script>
<template>
    <div class="pa-4">
        <h3>Дома в управлении</h3>
        <v-divider color="accent" thickness="3" class="border-opacity-100 mt-2 mb-2"
            style="max-width:200px"></v-divider>
        <v-list>

            <v-list-item v-for="(house, i) in houses" :key="i" :value="house" color="primary">
                <v-list-item-title>
                    {{ `${i + 1}. ${house.address}` }}.
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </div>


</template>