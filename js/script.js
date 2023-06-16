console.log('JS OK');
console.log('Vue OK');

const { createApp } = Vue

createApp({
    data(){
        return{
            message: 'Hello Vue!',
            vueImage: 'img/vue-js.png'
        }
    }
}).mount('#root');