<script setup>

import PdfView from '~/components/PdfView.vue';


let docs = ref([
    {
        title: "Постановка на учет в налоговой",
        link: '/documents/PosatnovkaNaUchet.pdf'

    },
    {
        title: "Выписка из ЕГРЮЛ",
        link: '/documents/EGRUL.pdf'

    },
    {
        title: "Устав",
        link: '/documents/Ustav.pdf'
    },

])
let doc = ref(null)
let dialog = ref(false)

let openDialog = (item) => {

    doc.value = item
    dialog.value = true

}


</script>
<template>
  <div class="pa-4">

    <h3>Документы</h3>
    <v-divider color="accent" thickness="3" class="border-opacity-100 mt-2 mb-2" style="max-width:200px"></v-divider>
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
                <v-btn density="compact" color="accent" icon="mdi-close" variant="text" @click="dialog = false"
                    style="position: fixed; top: 10px; right: 10px; z-index: 1;"></v-btn>

            </div>

            <PdfView :link='doc.link' :title="doc.title" />

        </v-card>
    </v-dialog>

</div>
</template>