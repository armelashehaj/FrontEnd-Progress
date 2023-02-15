const app = Vue.createApp({
  data() {
    return {
      emer: '',
      mbiemer: '',
      email: '',
      sasia: 1,
      llojiIBiletes: 'ekonomik',
      referenca: [],
      kerkesaSpeciale: '',
      dakortesia: false
    }
  }, 
    computed: {
      emerIPlote: {
        get: function(){
          if(this.emer && this.mbiemer){
            return this.emer + ' ' + this.mbiemer;
          } else {
            return this.emer || this.mbiemer;
          }
        },
        set: function(emerIRi){
          const emra = emerIRi.split(' ');
          if(emra.length === 2){
            this.emer = emra[0];
            this.mbiemer = emra[1];
          }
          if(emra.length <= 1){
            this.emer = emra[0] || '';
            this.mbiemer = emra[1];
          }
        }
      },

      pershkrimBilete: function(){
        let llojBilete = 'ekonomike';
      if (this.llojiIBiletes === 'vip') {
        llojBilete = 'VIP';
      }

      let shumesiIBiletes = 'bileta';
      if (this.sasia === 1) {
        shumesiIBiletes = 'bilete';
      }

      return this.sasia + ' ' + shumesiIBiletes + ' ' + llojBilete;
    },
    IVlefshem: function() {
      return this.emer && this.mbiemer && this.email && this.dakortesia;
    }
  }, 
  watch: {
    kerkesaSpeciale: function(kerkesaTeReja, kerkesaTeVjetra) {
      if (kerkesaTeReja.toLowerCase().includes('miq') || 
      kerkesaTeReja.toLowerCase().includes('miq')) {
        this.llojiIBiletes = 'vip';
      }
    }
  },
  methods: {
    pastroFushat: function() {
      this.email = '';
      this.mbiemer = '';
      this.email = '';
      this.sasia= 1;
      this.llojiIBiletes = 'general';
      this.referenca = [];
      this.kerkesaSpeciale = '';
      this.dakortesia = false;
    }
  }
  },
);

app.mount('#forme');
  