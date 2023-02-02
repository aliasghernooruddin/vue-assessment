<template>
    <v-card class="card" outlined v-cloak @drop.prevent="addDropFile" @dragover.prevent>

        <v-container fluid>
            <v-row no-gutters>

                <v-col cols="12 mb-2">
                    <v-img :src="url" width="380" height="160"></v-img>
                </v-col>

                <v-col cols="12">
                    <v-file-input outlined chips accept="image/*" v-model="file" label="Click Here or Drop Here">
                    </v-file-input>
                </v-col>

            </v-row>
        </v-container>

    </v-card>
</template>


<script>
export default {
    name: 'UploadImage',
    props: ['value'],
    computed: {
        file: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    },
    data: () => ({
        url: null
    }),

    methods: {
        addDropFile(e) {
            this.file = e.dataTransfer.files[0];
        }
    },
    watch: {
        file(val) {
            if (!val) {
                this.url = null
            } else {
                this.url = URL.createObjectURL(val);
            }

        }
    }
}
</script>

<style scoped>
.card {
    height: 255px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>