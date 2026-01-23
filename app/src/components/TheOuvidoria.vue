<script setup>

</script>

<template>
    <div class="flex flex-col items-start md:items-center gap-3">
        <h1 class="text-[40px] text-orange-600 font-bold font-sans">
            <slot name="title"></slot>
        </h1>
        <p class="font-sans text-base">
            <slot name="subtitle"></slot>
        </p>
    </div>
</template>