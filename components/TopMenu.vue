<script setup>

let activeMenu = ref(0) 

</script>
<template>

    <v-row>
        <v-col>

            <v-btn-toggle color="primary" v-model="activeMenu"   group>
                <v-btn value="left" >
                    Left
                </v-btn>

                <v-btn value="center">
                    Center
                </v-btn>

                <v-btn value="right">
                    Right
                </v-btn>

                <v-btn value="justify">
                    Justify
                </v-btn>
            </v-btn-toggle>
        </v-col>
    </v-row>

</template>