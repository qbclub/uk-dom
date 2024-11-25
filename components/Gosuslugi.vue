<script setup>
const config = useRuntimeConfig();
let dialog = ref(false)

const opaId = config.public.opaId 
</script>

<template>
    <p>
        В квитанциях ошибки, в подъезде мусор, сотрудники управляющей хамят? <br>

    </p>
    <p> Расскажите о проблемах с ЖКХ.</p>
    <div class="d-flex justify-center">
        <v-btn class="ma-4" color='accent' @click="dialog = true">
            Написать о проблеме
        </v-btn>
    </div>
    <v-dialog v-model="dialog" width="800">
        <v-card>
            <v-card-title class="d-flex justify-space-between">
                <div class="d-flex align-center">
                    <img style="height:20px" src="../assets/images/gosuslugi.png"></img>
                </div>
                <v-btn density="compact" color="accent" icon="mdi-close" variant="text" @click="dialog = false"></v-btn>


            </v-card-title>
            <v-card-text>
                <div class="gosuslugi-widget">
                    <iframe :src="`//pos.gosuslugi.ru/form/?opaId=${opaId}`" width="100%" height="600px" frameborder="0"
                        scrolling="no">
                    </iframe>
                </div>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>
<style scoped>
.gosuslugi-widget {

    width: 100%;
}
</style>
