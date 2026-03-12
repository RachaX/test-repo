<template>
    <div class="layout">
        <p style="color: black;">Ovo je testna stranica.</p>
        <button @click="loadText">Dohvati.</button>
        <p style="color: black;">Tekst koji je dohvacen: {{ text }}</p>
    </div>
</template>

<script>
    import client from '../service/service.ts';

    export default {
        name: 'Home',
        data() {
            return {
                text: ''
            }
        },
        methods: {
            async loadText() {
                try {
                    const response = await client.get('/myapp/');
                    if(response.status === 200) {
                        console.log('Response: ', response.data);
                        this.text = response.data['msg'];
                    }
                } catch(err) {
                    this.text = 'err';
                }
            }
        }
    }
</script>

<style>
    .layout {
        background-color: white;
        width: 100%;
        height: 100%;
    }
</style>