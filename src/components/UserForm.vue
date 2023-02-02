<template>
    <section>
        <v-form ref="form">
            <v-text-field outlined v-model="user.firstName" :rules="nameRules" label="First Name"></v-text-field>

            <v-text-field outlined v-model="user.lastName" :rules="nameRules" label="Last Name"></v-text-field>

            <v-text-field outlined v-model="user.email" :rules="emailRules" label="E-mail"></v-text-field>

        </v-form>
    </section>
</template>


<script>
export default {
    name: 'UserForm',
    props: ['value'],
    computed: {
        user: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    },
    watch: {
        user: {
            handler() {
                this.$emit('emitInput', this.$refs.form.validate());
            },
            deep: true
        }
    },
    data: () => ({
        nameRules: [
            v => !!v || 'Name is required'
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods: {},
}
</script>
