<template>
    <button class="shadow bg-emerald-400 hover:bg-emerald-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-16 rounded-full" type="submit">
    {{ title}}
    </button>
</template>

<script>
  export default {
    name: "BaseButton",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
  };
</script>