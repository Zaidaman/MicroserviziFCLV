var app = new Vue({
    el: "#app",
    data: {
        users: [],
        newUser: { nome: "", cognome: "" },
        editingUser: null
    },
    mounted() {
        this.loadUsersFromStorage(); // Carica gli utenti dal Web Storage al caricamento della pagina
    },
    methods: {
        addUser() {
            // Aggiungi il nuovo utente alla lista
            this.users.push(this.newUser);
            // Reimposta i campi del nuovo utente
            this.newUser = { nome: "", cognome: "" };
            this.saveUsersToStorage(); // Salva gli utenti nel Web Storage
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
            this.saveUsersToStorage(); // Salva gli utenti nel Web Storage
        },
        cancelEdit() {
            // Annulla la modifica all'utente ripristinando la copia originale
            var index = this.users.indexOf(this.editingUser);
            this.users.splice(index, 1, this.originalUser);
            this.editingUser = null;
            this.originalUser = null;
            this.saveUsersToStorage(); // Salva gli utenti nel Web Storage
        },
        deleteUser(user) {
            // Rimuovi l'utente dalla lista
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this.saveUsersToStorage(); // Salva gli utenti nel Web Storage
        },
        saveUsersToStorage() {
            // Salva gli utenti nel Web Storage come stringa JSON
            localStorage.setItem('users', JSON.stringify(this.users));

            axios
                .post('users.json', this.users)
                .then(response => {
                    console.log("Utenti salvati con successo nel file JSON", response);
                })
                .catch(error => {
                    console.error("Errore durante il salvataggio degli utenti nel file JSON", error);
                });
        },
        loadUsersFromStorage() {
            // Carica gli utenti dal Web Storage
            var users = localStorage.getItem("users");
            if (users) {
                this.users = JSON.parse(users);
            } else {
                // Se il localStorage è vuoto, carica gli utenti da un file JSON locale
                axios
                    .get('users.json') // users.json è il nome del file JSON locale
                    .then(response => {
                        this.users = response.data;

                        // Salva gli utenti nel localStorage
                        localStorage.setItem("users", JSON.stringify(this.users));
                    })
                    .catch(error => {
                        console.error("Errore durante il caricamento degli utenti dal file JSON", error);
                    });
            }
        },

        downloadJSON() {
            const json = localStorage.getItem('users');
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'users.json';
            link.click();
            URL.revokeObjectURL(url);
        }
    }
});