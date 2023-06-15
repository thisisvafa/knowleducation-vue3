<script setup lang="ts">
import Title from '@/components/Title.vue'
import Input from '@/components/Forms/Input.vue'
import Textarea from '@/components/Forms/Textarea.vue'
import Button from '@/components/Forms/Button.vue'
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const message = ref('');

const submitForm = async () => {
    alert('Form submitted successfully!');
}
</script>

<template>
    <div>

        <Title title="Need any help...?" :line=false />

        <div class="bg-white shadow-xl rounded-2xl p-8">
            <div class="flex space-x-8">
                <div class="w-3/5">
                    <form @submit.prevent="submitForm" class="w-full">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3">

                                <Input id="fullname" label="Full Name" v-model="fullName" name="fullname"/>
                                
                            </div>
                            <div class="w-full md:w-1/2 px-3">

                                <Input id="email" label="Email" name="email" type="email" v-model="email"/>
                            
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3">
                            <div class="w-full px-3">

                                <Textarea id="message" label="Message" name="message" v-model="message" />

                            </div>
                            <div class="flex justify-between w-full px-3 mt-3">
                                <Button title="Send" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w-2/5">
                    <div class="flex items-center w-full h-full bg-yellow-100 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-72 h-72 mx-auto text-yellow-300/70 -rotate-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>