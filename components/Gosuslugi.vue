<script setup>
let dialog = ref(false)

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
            <v-card-title >
                <div class="d-flex align-center">
                    <img style="height:20px" src="../assets/images/gosuslugi.png"></img>
                </div>

               
            </v-card-title>
            <v-card-text>
                <div class="gosuslugi-widget">
                    <iframe src="//pos.gosuslugi.ru/form/?opaId=359799" width="100%" height="600px" frameborder="0"
                        scrolling="no">
                    </iframe>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                    Закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<style scoped>
.gosuslugi-widget {

    width: 100%;
}
</style>
