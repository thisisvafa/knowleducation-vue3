<script setup lang="ts">
  import Logo from '@/components/Logo.vue'
  import { ref, onMounted } from 'vue';

  const headerClasses = ref('');

  const handleScroll = () => {
    const header = document.querySelector('header');
    headerClasses.value = window.scrollY > 0 ? 'fixed top-4 z-30 translate-y-2 transition-all' : '';

    if (window.scrollY > 900) {
      headerClasses.value = 'fixed top-4 z-30 w-[87.5%] translate-y-2 transition-all';
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
</script>

<template>
  <header :class="headerClasses">
    <div class="flex justify-between space-x-24 items-center py-3 px-6 rounded-full bg-white shadow-xl shadow-gray-300/50 text-lg transition-all">
      <div class="flex items-center space-x-2">
        <Logo class="w-8" />
        <h1 class="font-righteous font-bold text-gray-600 tracking-wide capitalize">knowleducation</h1>
      </div>
      <div>
        <ul class="flex space-x-6">
          <li><a class="text-gray-400 hover:text-gray-500 transition font-semibold" href="">Courses</a></li>
          <li><a class="text-gray-400 hover:text-gray-500 transition font-semibold" href="">Contact Us</a></li>
          <li><a class="text-gray-400 hover:text-gray-500 transition font-semibold" href="">Lorem</a></li>
        </ul>
      </div>
      <div>
        <button class="bg-emerald-400 text-white rounded-full px-8 py-2 font-semibold">Contact Us</button>
      </div>
    </div>
  </header>
</template>


<style scoped>
</style>
