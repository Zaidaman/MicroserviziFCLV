// Creazione dell'istanza Vue
var app = new Vue({
    el: "#app",
    data: {
        users: [],
        newUser: { id: null, nome: "", cognome: "" },
        editingUser: null
    },
    mounted() {
        // Recupera i dati dal file JSON utilizzando l'API Fetch
        fetch('user.json')
            .then(response => response.json())
            .then(data => {
                // Assegna i dati recuperati all'array "users"
                this.users = data;
            })
            .catch(error => {
                console.error('Errore durante il recupero dei dati:', error);
            });
    },
    methods: {
        addUser() {
            // Genera un nuovo ID
            var newId = this.users.length + 1;
            // Assegna l'ID al nuovo utente
            this.newUser.id = newId;
            // Aggiungi il nuovo utente alla lista
            this.users.push(this.newUser);
            // Reimposta i campi del nuovo utente
            this.newUser = { id: null, nome: "", cognome: "" };
        },
        editUser(user) {
            // Crea una copia dell'utente originale
            this.originalUser = { ...user };
            // Imposta l'utente da modificare
            this.editingUser = user;
        },
        saveUser() {
            // Salva le modifiche all'utente
            this.editingUser = null;
            this.originalUser = null;
        },
        cancelEdit() {
            // Annulla la modifica all'utente ripristinando la copia originale
            var index = this.users.indexOf(this.editingUser);
            this.users.splice(index, 1, this.originalUser);
            this.editingUser = null;
            this.originalUser = null;
        },
        deleteUser(user) {
            // Rimuovi l'utente dalla lista
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
        }
    }
});