<template>
    <div>
        <navbar></navbar>
        This is the homepage.
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';

    export default {
        components: {
            Navbar
        },
        ready() {
            console.log('Homeview is ready');
        }
    }
</script>