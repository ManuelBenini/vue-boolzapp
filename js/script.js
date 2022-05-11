dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('it');

const app = new Vue({

  el: '#app',

  data: {

    searchContact: '',
    messageToSend: '',
    activeContact: 0,
    dropdownVisible: false,
    defaultContactLastAccess : '12:00',
    currentTime: dayjs().format('DD/MM/YYYY HH:mm:ss'),
    currentContactLastAccess: dayjs().format('HH:mm'),

    contacts:[

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

    contactReplies:[
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
        'Ho bisogno di stare solo adesso...',
        'Lo vuoi un pezzo di pane?',
        'A Miriam non dicevi così ieri...',
        'Mario mi ha detto che ti piace!!!',
        'Laura è la solita scansafatiche',
        'È normale',
        'In effetti Manu e Mario sono alti',
        'Perfino!!'
    ]
  },
 
  methods:{

    sendMessage(){

        // PUSH DATA NELL'ARRAY
            if(this.messageToSend.length > 0){
                this.contacts[this.activeContact].messages.push({
                    date: this.currentTime,
                    message: this.messageToSend,
                    status: 'sent'
                });

                setTimeout(() => {
                    this.messageReceived(this.currentTime);
                    this.defaultContactLastAccess = this.currentContactLastAccess;
                }, 2000)

                this.sendAudio();
                this.messageToSend = '';   
            }
        //
    },

    messageReceived(currentTime){
        this.contacts[this.activeContact].messages.push({
            date: currentTime,
            message: this.contactReplies[this.pickRandom(0, this.contactReplies.length - 1)],
            status: 'received'
        });
        this.receiveAudio();
    },

    deleteMessage(index){
        if(confirm('Vuoi veramente cancellare il messaggio?')){
            this.contacts[this.activeContact].messages.splice(index,1);
        }
    },

    chatQuery(){
        if(isNaN(this.searchContact) || this.searchContact === ''){
            this.contacts.forEach(user => {
                if(user.name.toLowerCase().includes(this.searchContact.toLowerCase())){
                    user.visible = true;
                }else{
                    user.visible = false;
                }
            });   
        }
    },

    sendAudio(){
        const audio = new Audio("../audio/send-effect.mp3");
        audio.play();
    },

    receiveAudio(){
        const audio = new Audio("../audio/receive-effect.mp3");
        audio.play();
    },

    pickRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

  }

});