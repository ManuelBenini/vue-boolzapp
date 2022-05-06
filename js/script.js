const app = new Vue({

  el: '#app',

  data: {

    searchChat: '',
    messageToSend: '',
    selectedUser: 0,
    
    users:[

      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
      },
      {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
      },
      {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
      },
      {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
      },
      {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
      },
      {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
      }

    ],

    replies:[
        'Scusami ma al momento non posso rispondere!',
        'Sono occupato al momento',
        'In realtà non mi stai molto simpatico...',
        'Chi lo sà, probabilmente è la soluzione giusta.',
        'Non me la sento di darti contro, ho paura..',
        'Non sto molto bene purtroppo..',
        'Niente di che, che devo fare? Mi annoio',
        'Dai su non fare così, potrebbe andare peggio',
        'Vuoi che ti legga il futuro?',
        'No, adesso non me la sento molto...',
        'Possiamo rimandare?',
        'Ti ricordi la festa di capodanno? Bellissima',
        'Quando eravamo piccoli non eri così...',
        'Mi fai ricordare tante belle cose...Grazie.',
        'Ho bisogno di te adesso',
        'Ho bisogno di stare solo adesso...'
    ]
  },
 
  methods:{

    sendMessage(){

        // VARIABILI DATE
            const d = new Date();
            let day = d.getDate();
            let month = d.getMonth() + 1;
            let year = d.getFullYear();
            let hours = d.getHours();
            let minutes = d.getMinutes();
            let sec = d.getSeconds();
        //

        // IF PER STAMPARE SEMPRE DUE CIFRE NELLE DATE
            if(hours < 10){
                hours = '0' + d.getHours();
            }

            if(minutes < 10){
                minutes = '0' + d.getMinutes();
            }

            if(sec < 10){
                sec = '0' + d.getSeconds();
            }

            if(day < 10){
                day = '0' + d.getDate();
            }

            if(month < 10){
                month = '0' + (d.getMonth() + 1);
            }
            
            let fullTime = `${day}/${month}/${year} ${hours}:${minutes}:${sec}`;
        //

        // PUSH DATA NELL'ARRAY
            if(this.messageToSend.length > 0){
                this.users[this.selectedUser].messages.push({
                    date: fullTime,
                    message: this.messageToSend,
                    status: 'sent'
                });

                setTimeout(() => {
                    this.messageReceived(fullTime)
                }, 2000)


                this.messageToSend = '';   
            }
        //
    },

    messageReceived(fullTime){
        this.users[this.selectedUser].messages.push({
            date: fullTime,
            message: this.replies[this.pickRandom(0, this.replies.length - 1)],
            status: 'received'
        });
    },

    chatQuery(){
        if(isNaN(this.searchChat) || this.searchChat === ''){
            this.users.forEach(user => {
                if(user.name.toLowerCase().includes(this.searchChat.toLowerCase())){
                    user.visible = true;
                }else{
                    user.visible = false;
                }
            });   
        }
    },

    pickRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

  }

});