<script setup lang="ts">
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

const formData = reactive({
    fullname: "",
    email: "",
    message: "",
});

const rules = computed(() => {
    return {
        fullname: { required:helpers.withMessage('Field can not be empty.', required), $autoDirty: true },
        email: { required:helpers.withMessage('Field can not be empty.', required), email:helpers.withMessage('Email address is incorrect.', email), $autoDirty: true},
        message: { required:helpers.withMessage('Field can not be empty.', required), $autoDirty: true },
    };
});

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {
        alert('Form submitted successfully!');
    } else {
        alert('Error: Failed to submit the form. Please try again later.');
    }
}
</script>

<template>
    <div class="bg-[#f7f9fb] py-16 px-28">
        <div class="flex items-center justify-between space-x-3 mb-8">
        <h3 class="font-righteous font-bold text-4xl text-gray-600">Need any help...?</h3>
        </div>

        <div class="bg-white shadow-xl rounded-2xl p-8">
        <div class="flex space-x-8">
            <div class="w-3/5">
                <form @submit.prevent="submitForm" class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block tracking-wide text-gray-400 text-base mb-2" for="full-name">
                                Full Name
                                <span v-for="error in v$.fullname.$errors" :key="error.$uid" class="text-red-500 text-xs ml-2 italic">{{ error.$message }}</span>
                            </label>
                            <input v-model="formData.fullname" name="fullname" id="full-name" type="text" 
                            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400"
                            :class="v$.fullname.$error === true ? 'border-red-400' : 'border-emerald-400'"
                            />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block tracking-wide text-gray-400 text-base mb-2" for="email">
                                Email
                                <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500 text-xs ml-2 italic">{{ error.$message }}</span>
                            </label>
                            <input v-model="formData.email" name="email" id="email" type="email" 
                            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400"
                            :class="v$.email.$error === true ? 'border-red-400' : 'border-emerald-400'"
                            />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-gray-400 rounded-lg text-base mb-2" for="grid-password">
                                Message
                                <span v-for="error in v$.message.$errors" :key="error.$uid" class="text-red-500 text-xs ml-2 italic">{{ error.$message }}</span>
                            </label>
                            <textarea v-model="formData.message" name="message" rows="10" 
                            class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400 mb-3"
                            :class="v$.email.$error === true ? 'border-red-400' : 'border-emerald-400'">
                            </textarea>
                        </div>
                        <div class="flex justify-between w-full px-3">
                            <button class="shadow bg-emerald-400 hover:bg-emerald-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-16 rounded-full" type="submit">
                            Send
                            </button>
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