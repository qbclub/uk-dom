// plugins/vue-pdf-embed.js
import PdfEmbed from 'vue-pdf-embed';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('PdfEmbed', PdfEmbed);
});
