<script setup>


const pdfViewer = ref(null);
const {link, title} = defineProps(["link", 'title']);

const pdfSrc = ref(link);

function printPdf() {
    if (pdfViewer.value) {
        pdfViewer.value.print();
    }
}
const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfSrc.value;
    link.download = title; // You can set any filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>
<template>
    <ClientOnly>
 
        <div class="d-flex justify-center">
            <v-btn @click="downloadPdf" class="ma-4">Скачать</v-btn>
            <v-btn @click="printPdf" class="ma-4">Печать</v-btn>
        </div>

        <PdfEmbed ref="pdfViewer" style="max-width: 100%;" :source="pdfSrc" />
    </ClientOnly>
</template>