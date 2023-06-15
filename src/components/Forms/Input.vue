<template>
    <label v-if="label" :for="id" class="block tracking-wide text-gray-400 text-base mb-2">
        {{ label }}
        <span v-if="error" class="text-red-500 text-xs ml-2 italic">{{ errorMessege }}</span>
    </label>
    
    <input :id="id" :type="type" :name="name" :value="modelValue" @input="updateInput"
    class="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-emerald-400"
    :class="error ? 'border-red-400' : 'border-emerald-400'"
    />
</template>
  
<script>
  export default {
    name: "BaseInput",
    data(){
        return {
            label: '',
            modelValue: '',
            name: '',
            type: '',
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
        type: {
            type: String,
            default: "text",
        }
    },
    computed: {
        isInputEmpty() {
            return this.modelValue.trim() === "";
        },
        name() {
            return this.name.toLowerCase();
        },
    },
    methods: {
        updateInput(event) {
            if (this.isInputEmpty) {
                if (event.target.type === 'email') {
                    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    const isEmailValid = emailPattern.test(event.target.value);
                    this.error = true;

                    if (event.target.value.trim() === '') {
                        this.errorMessege = 'Field can not be empty.';
                    } else if (!isEmailValid) {
                        this.errorMessege = 'Email address is incorrect.';
                    } else {
                        return;
                    }
                } 
                
                if (event.target.type === 'text') {
                    this.error = true;

                    if (event.target.value.trim() === '') {
                        this.errorMessege = 'Field can not be empty.';
                    } else {
                        return;
                    }
                }
            } else {
                this.error = false;
                this.$emit("update:modelValue", event.target.value);
            }
            this.$emit("update:modelValue", event.target.value);
        }
    }
  };
</script>