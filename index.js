const Home ={
    template:`
    <h1>Introduzione</h1>
            <p>L'architettura dei microservizi si basa sulla suddivisione delle
                applicazioni in componenti modulari e indipendenti, chiamati
                microservizi.<br> Ogni microservizio rappresenta una funzionalità
                specifica dell'applicazione e si occupa autonomamente della gestione
                dei dati e delle comunicazioni con gli altri microservizi.<br>
                I microservizi offrono una serie di vantaggi, tra cui la modularità,
                la scalabilità, la facilità di deployment e la gestione indipendente
                dei servizi. Tuttavia, per sfruttare appieno questi vantaggi, è
                fondamentale una progettazione oculata, una coordinazione efficace
                e una gestione attenta delle comunicazioni tra i diversi microservizi.<br>
            </p>
            <img id="img3" alt="Immagine esempio di interconnessione" src="img/3.jpg">
            <h2 id="storia">Storia</h2>
            <p id="sto1">Negli ultimi anni, i microservizi hanno guadagnato popolarità
                come un approccio architetturale innovativo.<br> Esaminiamo la storia
                di questa metodologia:<br><br>
                Anni 2000-2010:<br><br>
                Durante questo periodo, gli sviluppatori iniziarono a esplorare nuovi
                modelli per affrontare le sfide delle applicazioni monolitiche complesse
                . L'idea di una "SOA leggera" emerse come un'alternativa ai tradizionali
                approcci SOA, focalizzandosi sulla suddivisione delle applicazioni in
                servizi più piccoli e indipendenti.<br><br>
                Anno 2011:<br><br>
                Nel 2011, Adrian Cockcroft, Chief Architect di Netflix all'epoca,
                introdusse il concetto di "architettura dei microservizi" durante
                una conferenza. Egli discusse dell'approccio adottato da Netflix per
                affrontare le sfide di scalabilità e complessità delle proprie
                applicazioni. Questa presentazione fu fondamentale nel diffondere
                la consapevolezza dei microservizi e ispirò molti sviluppatori e
                organizzazioni ad adottarli.<br><br>
                Anni 2012-2014:<br><br>
                Durante questi anni, importanti aziende tech come Amazon, Google e
                Twitter cominciarono a condividere le proprie esperienze nell'adozione
                dei microservizi. Furono presentati approcci e framework specifici,
                come il framework Spring Boot di Pivotal, che semplificava lo sviluppo
                e la gestione dei microservizi. Questi contributi contribuirono a
                consolidare l'interesse e l'adozione dei microservizi.
                <br></p>
            <img id="img4" alt="Foto di Peter Rodgers ad un summit" src="img/4.jpg">
            <p id="sto2">Anni 2015-2016:<br><br>
                Nei successivi anni, l'architettura dei microservizi continuò a
                guadagnare popolarità, specialmente nell'ambito delle applicazioni
                cloud-native. Il concetto di "DevOps" divenne diffuso, evidenziando
                l'importanza della collaborazione tra sviluppatori e operatori per
                fornire nuove funzionalità in modo rapido e affidabile. I microservizi
                divennero un elemento chiave nell'approccio DevOps, consentendo una
                distribuzione indipendente e veloce delle diverse componenti dell'
                applicazione.<br><br>
                Anni 2017-oggi:<br><br>
                Negli ultimi anni, l'architettura dei microservizi si è affermata
                come uno standard per molte organizzazioni desiderose di sviluppare
                applicazioni scalabili, flessibili e modulari. Sono stati sviluppati
                strumenti e framework specifici per la gestione dei microservizi,
                tra cui Kubernetes, che agevolano la distribuzione, l'orchestrazione
                e la scalabilità dei servizi. L'adozione dei microservizi è stata
                favorita anche dalla crescita dell'approccio di sviluppo basato su
                API e dall'uso di architetture a container.<br>
                In sintesi, la storia dei microservizi riflette una crescente
                consapevolezza dei vantaggi che possono offrire in termini di
                scalabilità, flessibilità e sviluppo agile delle applicazioni.<br>
            </p>
            <img id="img5" alt="Immagine tipica del mercato azionario" src="img/5.jpeg">
    `
};
const Approfondimenti={
    template:`
    <h1>Approfondimento sui Microservizi</h1>
            <h2 id="intro">Architettura monolitica VS architettura di microservizi</h2>
                <p>L' architettura monolitica raccoglie in un unico servizio tutte le funzionalita', esse sono collegate fra loro ed eseguite come un unico servizio, questo porta varie problematiche:</p>
                <ul>
                    <li>Se si verifica un picco su una funzione del nostro sito, dovremo ridimensionare l' intera architettura per supportare questi carichi di lavoro</li>
                    <li>Aggiungere, modificare o eliminare una funzione e' incredibilmente complesso e laborioso, portando anche ad eventuali errori durante la fase di programmazione</li>
                    <li>La presenza di molte funzioni su un sito ognuna dipendente dell'altra puo' provocare in caso di errore un effetto a "Domino", propagando il disagio su tutto il sito</li>
                </ul>
                <p>L' architettura di microservizi permette di raccogliere piu' servizi indipendenti, ognuno con un' unica funzione, capaci di comunicare fra loro tramite API, questa architettura ha vari vantaggi. tra cui:</p>
                <ul>
                    <li>Autonomia, ogni servizio viene eseguito senza influenzare il codice sorgente, proprio o altrui, la comunicazione avviene solo tramite API ben definite</li>
                    <li>Specializzati, questa architettura permette al programmatore, in caso ampliasse il codice, di scomporre un servizio in servizi piu' piccoli</li>
                    <li>Agilita', permette una gestione piu' veloce e semplice dei propri servizi, inoltre permette una grande scalabilita'</li>
                    <li>Resilienza, la gestione degli errori non e' piu' centralizzata sul sito web rischiando un effetto "domino", ma in caso di errori sui servizi questo non andra' ad intaccare il resto del sito web</li>
                </ul>
                <img id="img1" alt="Differenze fra architettura monolitica e micro-service" src="img/1.png">
            <h2 id="quest">Come si utilizzano i Microservizi?</h2>
                <p>Per utilizzare i microservizi in modo efficace, è necessario seguire alcuni passaggi fondamentali:</p>
                <ol>
                    <li>Analisi dell'applicazione: Valuta l'applicazione e individua le diverse funzionalità o domini di business che possono essere suddivisi in microservizi. Ogni microservizio dovrebbe rappresentare una specifica funzionalità dell'applicazione.</li>
                    <li>Definizione delle interfacce: Stabilisci le interfacce (API) che i microservizi utilizzeranno per comunicare tra loro. È importante definire contratti di interfaccia che consentano l'interazione senza dipendere dagli aspetti interni dei singoli servizi.</li>
                    <li>Suddivisione dell'applicazione: Suddividi l'applicazione in microservizi basati sulle funzionalità identificate in precedenza. Assicurati che ogni microservizio sia autonomo e indipendente, gestendo i propri dati e operazioni di business.</li>
                    <li>Implementazione dei microservizi: Implementa ciascun microservizio come un'entità separata, utilizzando il linguaggio di programmazione e le tecnologie più adatte alle sue esigenze specifiche. Ogni microservizio dovrebbe avere il proprio ambiente di runtime e il proprio database o meccanismo di persistenza dei dati.</li>
                    <li>Gestione delle comunicazioni: Implementa meccanismi di comunicazione tra i microservizi utilizzando protocolli e tecnologie come REST, messaggistica asincrona o architettura event-driven. Assicurati di considerare la resilienza delle comunicazioni e la gestione degli errori.</li>
                    <li>Orchestrazione e coordinamento: Gestisci l'orchestrazione e il coordinamento dei microservizi per completare operazioni di business più complesse. Puoi utilizzare strumenti di gestione dei processi aziendali (BPM) o tecnologie di orchestrazione come Kubernetes per gestire i microservizi in un ambiente di produzione.</li>
                    <li>Deployment e scalabilità: Implementa un sistema di deployment automatizzato per distribuire e gestire i microservizi. Sfrutta le capacità di scalabilità orizzontale per gestire efficacemente il carico di lavoro.</li>
                    <li>Monitoraggio e gestione: Implementa strumenti di monitoraggio e gestione per raccogliere dati sulle prestazioni dei microservizi, il loro stato e la scalabilità. Monitora le metriche chiave, le performance e l'integrità dei microservizi per garantire un funzionamento ottimale del sistema.</li>
                    <li>Evoluzione e aggiornamenti: Prendi in considerazione la gestione delle modifiche e degli aggiornamenti dei microservizi. Puoi adottare tecniche come il versionamento delle API e l'approccio "rolling update" per consentire un'evoluzione graduale e senza interruzioni del sistema.</li>
                </ol>
                <p>È fondamentale comprendere i principi e le pratiche architetturali dei microservizi per utilizzarli al meglio. Prima di adottarli, valuta attentamente i benefici e i costi coinvolti, in modo da assicurarti che siano adatti alle specifiche esigenze del tuo progetto o organizzazione.</p>
            <h2 id="better">Quando i microservizi non sono la scelta migliore</h2>
                <p>Anche se l' architettura a microservizi man mano sta diventando il nuovo standard, non sempre rimane la scelta migliore, certe volte una soluzione monolitica rimane la piu' conveniente per un' azienda o un' organizzazione.<br/>Questo si puo' applicare nei seguenti casi:</p>
                <ul>
                    <li>Non si dispone di tempo e budget per creare un Mock-up</li>
                    <li>Necessita' di un' applicazione semplice che non richiede particolare scalabilita' e flessibilita'</li>
                    <li>Inesperienza del programmatore</li>
                </ul>
                <img id="img2" alt="paragone dei primi computer con quelli moderni" src="img/2.png">
    `
};
const Tabella={
    data(){
        return {
            items: []
        }
    },
    methods: {
        getData: function(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted(){
        this.getData();
    },
    template:`
        <div id="app">
            <table>
                <caption>JSONPlaceholder/todos</caption>
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>ID</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td v-text="item.userId"></td>
                        <td v-text="item.id"></td>
                        <td v-text="item.title"></td>
                        <td v-text="item.completed"></td>
                    </tr>
                </tbody>
            </table>
        </div>`
};
const Modifica={
    data(){
        return {
            users: [],
            newUser: { nome: "", cognome: "" },
            editingUser: null
        }
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
    },
    mounted(){
        this.loadUsersFromStorage();
    },
    template: `
    <div id="app">
    <form
    @submit.prevent="addUser" v-if="!editingUser" id="newUser">
    <h2>Inserisci un nuovo utente:</h2><br>
    <label htmlFor="nome">Nome:</label>
    <input type="text" id="nome" v-model="newUser.nome" required>
        <br>
            <label htmlFor="cognome">Cognome:</label>
            <input type="text" id="cognome" v-model="newUser.cognome" required>
                <br>
                    <button type="submit">Aggiungi</button>
                </form>


                <form v-if="editingUser"
                @submit.prevent="saveUser" id="modUser">
                <h2>Modifica Utente:</h2><br>
                <label htmlFor="nome">Nome:</label>
                <input type="text" v-model="editingUser.nome" required>
                    <br>
                        <label htmlFor="cognome">Cognome:</label>
                        <input type="text" v-model="editingUser.cognome" required>
                            <br>
                                <button type="submit">Salva</button>
                                <button
                                @click="cancelEdit">Annulla</button>
                        </form>
                        <button
                        @click="downloadJSON" id="downJSON">Download JSON</button>

                    <table id="tableUser">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Modifica</th>
                            <th>Elimina</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users">
                            <td>{{user.nome}}</td>
                            <td>{{user.cognome}}</td>
                            <td>
                                <button
                                @click="editUser(user)">Modifica
                            </button>
                        </td>
                        <td>
                            <button
                            @click="deleteUser(user)">Elimina
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <script src="users.json"></script>`
};

const routes = [
    { path: '/Home', component: Home },
    { path: '/Approfondimenti', component: Approfondimenti },
    { path: '/Tabella', component: Tabella },
    { path: '/Modifica', component: Modifica },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#main');