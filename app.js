const app = Vue.createApp({
    data() {
        return {
            firstName: 'First',
            lastName: 'Last',
            gender: 'male',
            email: 'firstlast@test.com',
            picture: 'https://randomuser.me/api/portraits/men/40.jpg'
        }
    }, methods: {
        async generateUser() {
            const result = await fetch('https://randomuser.me/api')
            const {results} = await result.json()

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.gender = results[0].gender,
            this.email = results[0].email,
            this.picture = results[0].picture.large
        }
    }
})
app.mount('#app')