<script>
export default {
    props : {
        label : {
            type : String,
            required : true,
            default : "click me"
        },
        background : {
            type : String,
            default : "blue"
        },
    }
}
</script>

<template>
  <div>
    <button :style="{backgroundColor : background}">{{ label }}</button>
  </div>
</template>

<style scoped>

</style>