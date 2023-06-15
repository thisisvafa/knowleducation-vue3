<script setup lang="ts">
import MainSection from './components/MainSection.vue'
import Navbar from './components/global/Navbar.vue'
import Footer from './components/global/Footer.vue'
import Logo from './components/Logo.vue'
import Courses from './components/Courses.vue'
import ContactUs from './components/Contact.vue'
</script>

<template>
  <div class="bg-emerald-400 h-2 mb-14"></div>

  <div class="px-24 mb-14">
    <div class="flex items-center space-x-8">
      <div class="w-2/3">
        <header>
          <Navbar />
        </header>
        <div class="pt-4 px-6">
          <h3 class="font-righteous text-[90px] text-gray-600">Learn 
            <span class="relative">
              EDGE
              <span class="absolute -left-3 -bottom-10">
                  <span class="inline-block w-64 h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-emerald-400 rounded-full"></span>
              </span>
            </span> Cases
          </h3>
          <p class="text-gray-400 text-lg leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
          </p>
          <div class="relative w-[550px] mt-8">
            <input class="bg-white w-full p-4 rounded-full border border-gray-300" type="search" placeholder="What do you want to learn?">
            <button class="absolute top-2 right-2 bg-emerald-400 text-white rounded-full px-8 py-2 font-semibold">search</button>
          </div>
        </div>
      </div>
      <div class="w-1/3">
        <Logo class="p-8" />
      </div>
    </div>
  </div>


  <MainSection class="bg-[#f7f9fb]">
    <div class="flex items-center space-x-20 py-12">
      <div class="w-1/4">
        <div class="group relative rounded-2xl shadow-lg p-6 px-6 mb-8">
          <span class="absolute z-0 top-4 right-0 font-righteous font-bold text-[50px] origin-center rotate-45 opacity-5">0th</span>
          <div class="relative flex items-center space-x-10">
            <div class="relative">
              <img src="/img/hand-0.png" class="absolute bottom-3 left-4 z-10 w-11 group-hover:-rotate-[12deg] transition ease-in-out duration-100" alt="">
              <div class="relative z-0 w-20 h-20 bg-yellow-200 rounded-full"></div>
            </div>
            <div>
              <h3 class="font-righteous text-gray-700 text-lg mb-4">Zeroth reason</h3>
              <p class="text-gray-400">Lorem ipsum 0th</p>
            </div>
          </div>
        </div>

        <div class="group relative rounded-2xl shadow-lg p-6 px-6 mb-8">
          <span class="absolute z-0 top-4 right-0 font-righteous font-bold text-[50px] origin-center rotate-45 opacity-5">1st</span>
          <div class="relative flex items-center space-x-10">
            <div class="relative">
              <img src="/img/hand-1.png" class="absolute bottom-3 left-4 z-10 w-10 group-hover:-rotate-[12deg] transition ease-in-out duration-100" alt="">
              <div class="relative z-0 w-20 h-20 bg-yellow-200 rounded-full"></div>
            </div>
            <div>
              <h3 class="font-righteous text-gray-700 text-lg mb-4">First reason</h3>
              <p class="text-gray-400">Lorem ipsum 1st</p>
            </div>
          </div>
        </div>

        <div class="group relative rounded-2xl shadow-lg p-6 px-6">
          <span class="absolute z-0 top-4 right-0 font-righteous font-bold text-[50px] origin-center rotate-45 opacity-5">2nd</span>
          <div class="relative flex items-center space-x-10">
            <div class="relative">
              <img src="/img/hand-2.png" class="absolute bottom-3 left-5 z-10 w-10 group-hover:-rotate-[12deg] transition ease-in-out duration-100" alt="">
              <div class="relative z-0 w-20 h-20 bg-yellow-200 rounded-full"></div>
            </div>
            <div>
              <h3 class="font-righteous text-gray-700 text-lg mb-4">Second reason</h3>
              <p class="text-gray-400">Lorem ipsum 2nd</p>
            </div>
          </div>
        </div>


      </div>
      <div class="w-3/4">
        <h2 class="font-righteous text-4xl text-gray-700 mb-6">
          Choose Knowleducation over
          <span class="relative inline-block w-1">
            <span class="absolute -left-3 uppercase bottom-8 text-emerald-400 -rotate-45">all</span> 
            <span class="absolute -left-8 -top-1 uppercase font-serif text-emerald-400 border-r-4 border-emerald-400 w-7 h-8 rounded-full rotate-45"></span> 
            <span class="absolute left-1 -top-1 uppercase font-serif text-emerald-400 border-l-4 border-emerald-400 w-7 h-8 rounded-full -rotate-45"></span> 
          </span> 
          others...!
        </h2>
        <p class="text-xl text-gray-500 leading-10">
          Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam proin nisl felis, vehicula mauris litora primis id netus luctus condimentum. Odio mi luctus pharetra vehicula accumsan dui convallis justo, fringilla nunc ullamcorper fames tincidunt facilisi erat facilisis dictum, inceptos ultricies eu curae per diam donec. Netus nostra lobortis mattis tristique condimentum scelerisque phasellus quis hac sed habitasse, fringilla a sollicitudin eget enim malesuada mus parturient vitae ac, sodales duis justo torquent cursus varius risus suscipit ornare facilisis.
        </p>
      </div>
    </div>
  </MainSection>

  <MainSection>
    <Courses />
  </MainSection>

  <MainSection class="bg-[#f7f9fb]">
    <ContactUs />
  </MainSection>
  
  <Footer class="bg-[#f7f9fb]" />
  
</template>

<style scoped>
</style>
