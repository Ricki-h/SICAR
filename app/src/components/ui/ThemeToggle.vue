<script setup>
    import { ref, onMounted } from 'vue';
    const isDark = ref(false);
    const toggleTheme = () => {
        isDark.value = !isDark.value;
        applyTheme();
    };

    const applyTheme = () => {
        document.documentElement.classList.toggle('dark', isDark.value);
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    }

    onMounted(() => {
        const saved = localStorage.getItem('theme');
        isDark.value = saved === 'dark';
        applyTheme();
    })

    import moonIcon from '../../assets/icons/moon.svg?raw';
    import sunIcon from '../../assets/icons/sun.svg?raw';
</script>

<template>
    <div class="theme-toggle" :class="isDark ? 'theme-toggle-dark' : 'theme-toggle-light'" @click="toggleTheme">
        <div class="theme-toggle-circle">
            <svg v-if="isDark"  class="h-2.5 w-2.5 fill-orange-600" v-html="moonIcon" />
            <svg v-else  class="h-2.5 w-2.5 fill-blue-600" v-html="sunIcon" />
        </div>
    </div>
</template>