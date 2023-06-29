new Vue({
    el: '#app',
    data: {
        items: []
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
