<template>
    <div class="flex items-center justify-between space-x-3 mb-6">
        <h3 class="font-righteous font-bold text-4xl text-gray-600 ruby">{{ title }}</h3>
        <div v-if="line" class="w-full h-[1px] bg-gray-300"></div>
    </div>
</template>

<script>
export default {
    name: "BaseTitle",
    props: {
        title: {
            type: String,
            required: true,
        },
        line: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style scoped>
.ruby {
    display: ruby;
}
</style>