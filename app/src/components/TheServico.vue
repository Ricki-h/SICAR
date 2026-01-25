<script setup>

</script>

<template>
    <div>
        <h1 class="text-[40px] text-orange-600 font-bold font-sans">
            <slot name="title"></slot>
        </h1>
        <p class="font-sans text-base">
            <slot name="subtitle"></slot>
        </p>
    </div>
</template>