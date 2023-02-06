<template>
    <div>
        <h1>Test</h1>
    </div>
</template>

<script>
import {client} from 'laravel-job-status-js';

export default {
    name: "Test",
    mounted() {
        client.jobs.search().listen()
            .onStartingInitialLoad(() => console.log('starting initial load'))
            .onFinishingInitialLoad(() => console.log('finishing initial load'))
            .onStartingUpdate(() => console.log('starting update'))
            .onFinishingUpdate(() => console.log('finishing update'))
            .onUpdated((jobs) => console.log('updated', jobs))
            .onErrored((error) => console.log(error))
            .start();

        console.log("Test component mounted.");
    }
}
</script>

<style scoped>

</style>
