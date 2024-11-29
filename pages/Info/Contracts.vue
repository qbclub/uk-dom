<script setup>

import PdfView from '~/components/PdfView.vue';


let docs = ref([
    // {
    //     title: "Договор с Рир",
    //     link: '/documents/1.pdf'

    // },
    // {
    //     title: "Договор с Электросетями",
    //     link: '/documents/2.pdf'

    // },
    // {
    //     title: "Договор с водоканалом",
    //     link: '/documents/2.pdf'
    // },

])
let doc = ref(null)
let dialog = ref(false)

let openDialog = (item) => {

    doc.value = item
    dialog.value = true

}


</script>
<template>
   
    <v-list>

        <v-list-item v-for="(item, i) in docs" :key="i" :value="item" color="primary" @click="openDialog(item)">
            <v-list-item-title>
                {{ `${i + 1}. ${item.title}` }}.
            </v-list-item-title>
        </v-list-item>
    </v-list>

    <v-dialog v-model="dialog" width="100%">
        <v-card>
            <div class="ma-4 d-flex justify-space-between">
                <h3>
                    {{ doc.title }}
                </h3>
                <v-btn density="compact" color="accent" icon="mdi-close" variant="text" @click="dialog = false"></v-btn>

            </div>

            <PdfView :link='doc.link' :title="doc.title" />

        </v-card>
    </v-dialog>


</template>