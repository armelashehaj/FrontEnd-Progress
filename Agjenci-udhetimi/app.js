const app = Vue.createApp({ 
    data() {
        return {
            destinacioni: [
                {url:'img/berat.jpg', vendi: 'Berat'},
                {url:'img/apollonia.jpeg',vendi: 'Fier'},
                {url:'img/gjirokaster.jpg',vendi: 'Gjirokaster'},
                {url:'img/dhermi.webp',vendi: 'Dhermi'},
                {url:'img/kukes.jpg',vendi: 'Kukes'}
            ]
        }
    },
})

app.mount('#seksioni-1')

const s3 = Vue.createApp({
    data() {
        return {
            shfaq: false,
            destinacioni: [
                {url:'img/berat.jpg', vendi: 'Berat'},
                {url:'img/apollonia.jpeg',vendi: 'Fier'},
                {url:'img/gjirokaster.jpg',vendi: 'Gjirokaster'},
                {url:'img/dhermi.webp',vendi: 'Dhermi'},
                {url:'img/kukes.jpg',vendi: 'Kukes'}
            ], 
            mbishkrim: [
                'Berat','Fier','Gjirokaster', 'Dhermi','Kukes'
            ]
        }
    },  
})

s3.mount('#seksioni-3')

const paketa = Vue.createApp({
    data() {
        return {
            dPaketash: [
                {url:'img/thethHiking.jpg',aktiviteti: 'Ngjitje ne mal' , vendi: 'Valbone', harte: 'https://www.tripadvisor.com/Attractions-g2102072-Activities-Valbona_Kukes_County.html'},
                {url:'img/rafting.jpeg',aktiviteti: 'Rafting',vendi: 'Kanionet e Osumit', harte: 'https://www.tripadvisor.com/Attraction_Review-g801291-d4587533-Reviews-Osum_Canyon_Kanioni_i_Osumit-Corovode_Berat_County.html'},
                {url:'img/udhetimMeVarke.jpg',aktiviteti: 'Udhetim Me Varke',vendi: 'Karaburun', harte: 'https://www.tripadvisor.com/Search?q=karaburun&searchSessionId=DB169385C36A5D1F2F8E4D1C1AF09EC51676491457847ssid&searchNearby=false&geo=801291&sid=D9751FCBF481003BABE5490C15F1F2951676491496214&blockRedirect=true&ssrc=A&rf=1'},
                {url:'img/kalerim.jpg',aktiviteti: 'Kalerim' , vendi: 'Permet', harte: 'https://www.tripadvisor.com/Attractions-g801293-Activities-Permet_Gjirokaster_County.html'},
                {url:'img/meParashute.jpg',aktiviteti: 'Shetitje me parashute' , vendi: 'Llogara', harte: 'https://www.tripadvisor.com/Search?q=llogara&searchSessionId=7684ADFE8B67B6E8A2C38A3A549144521676491523916ssid&searchNearby=false&geo=801293&sid=D9751FCBF481003BABE5490C15F1F2951676491547053&blockRedirect=true&ssrc=A&rf=1'},
                {url:'img/neKsamil.jpg',aktiviteti: 'Pedalim me varke' , vendi: 'Ksamil' , harte: 'https://www.tripadvisor.com/Attractions-g4505725-Activities-Ksamil_Saranda_Vlore_County.html'},
                
            ]
        }
    },

})
paketa.mount('#seksioni-4');
