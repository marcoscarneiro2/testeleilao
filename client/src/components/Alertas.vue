<<<<<<< Updated upstream
<template>
    <v-alert error dismissible @input="onClose" :value="true" dark--text>
        {{text}}
    </v-alert>
</template>
<script>
export default {
    props:[''],
    methods:{
        onClose(){
            this.$emit('dismissed')
        }
    }
}

</script>