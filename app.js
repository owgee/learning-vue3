const app = Vue.createApp({
    data (){
        return {
            firstName: 'Owden',
            lastName: 'Godson',
            gender: 'male',
            email: 'owg@test.com',
            picture: 'https://randomuser.me/api/portraits/women/29.jpg'
        }
    },
    methods:{
        generateUser(){
            alert('Generate user')
        }
    }
})
app.mount('#app')