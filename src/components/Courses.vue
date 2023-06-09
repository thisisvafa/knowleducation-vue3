<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const blogs = ref([]);

onMounted(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch('/api/blogs');
    const data = await response.json();
    blogs.value = data.blogs;
    isLoading.value = false;
});

</script>

<template>
    <div class="py-16 px-28">
        <div class="flex items-center justify-between space-x-3 mb-6">
            <h3 class="font-righteous font-bold text-4xl text-gray-600 w-72">Our Courses</h3>
            <div class="w-full h-[1px] bg-gray-300"></div>
        </div>
        
        <div v-if="isLoading" class="grid grid-cols-3 gap-8">
            <div v-for="index in 6" :key="index" class="bg-[#f7f9fb] animate-pulse shadow-lg rounded-2xl p-4">
                <img src="" class="bg-slate-300 w-full h-80 rounded-lg overflow-hidden font-righteous font-extrabold text-7xl text-gray-300 text-center leading-[20rem]" alt="IMAGE">
                <div class="flex items-center w-full space-x-2 mt-4">
                    <div class="h-6 bg-slate-300 rounded-full w-full"></div>
                    <div class="h-6 bg-slate-300 rounded-full w-32"></div>
                    <div class="h-6 bg-slate-300 rounded-full w-9"></div>
                </div>
                <div class="flex items-center w-full space-x-2 mt-2">
                    <div class="h-6 bg-slate-300 rounded-full w-32"></div>
                    <div class="h-6 bg-slate-300 rounded-full w-9"></div>
                    <div class="h-6 bg-slate-300 rounded-full w-full"></div>
                </div>
                <div class="flex items-center w-full space-x-2 mt-2">
                    <div class="h-6 bg-slate-300 rounded-full w-44"></div>
                </div>
            </div>
        </div>

        <div v-else class="grid grid-cols-3 gap-8">
            <div v-for="blog in blogs" :key="blog.id" class="bg-[#f7f9fb] shadow-sm rounded-2xl p-4 cursor-pointer transition hover:shadow-lg hover:-translate-y-2">
                <img src="" class="bg-[#fefffe] w-full h-80 rounded-lg overflow-hidden font-righteous font-extrabold text-7xl text-gray-300 text-center leading-[20rem]" alt="IMAGE">
                <p class="text-lg text-gray-400 leading-7 mt-4">
                    {{ blog.title }}
                </p>
            </div>
        </div>

    </div>
</template>