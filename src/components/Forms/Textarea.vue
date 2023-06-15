<template>
    <label v-if="label" :for="id" class="block tracking-wide text-gray-400 text-base mb-2">
        {{ label }}
        <span v-if="error" class="text-red-500 text-xs ml-2 italic">{{ errorMessege }}</span>
    </label>
    <textarea :id="id" :name="name" :value="modelValue" @input="updateInput" cols="30" rows="10"
      class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400"
      :class="error ? 'border-red-400' : 'border-emerald-400'"
    ></textarea>
</template>
  
<script>
  export default {
    name: "BaseInput",
    data(){
        return {
            label: '',
            modelValue: '',
            name: '',
            error: false,
            errorMessege: '',
        }
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: [String, Number],
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        name() {
            return this.name.toLowerCase();
        },
    },
    methods: {
        updateInput(event) {
            if (event.target.value === '') {
                this.error = true;
                this.errorMessege = 'Field can not be empty.';
            }
            this.$emit("update:modelValue", event.target.value);
        }
    }
  };
</script>