<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods:{
        addOne(){
            this.$store.dispatch('numbers/increase', {value: 2});
        }
    }
}
</script>