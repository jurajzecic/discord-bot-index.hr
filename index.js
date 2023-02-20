///------------------------------------------------------------------------------------------------------------------------------
const {Client, Embed, MessageEmbed, RichEmbed} = require('discord.js');
const bot = new Client();
const PREFIX = '!';
const ms = require("ms");
const mongoose = require("mongoose");
require("dotenv").config();
const weather = require("weather-js");
var fields = require('fields');
const nodeHtmlToImage = require('node-html-to-image')
const { MessageAttachment } = require('discord.js')
const WebSocket = require('ws');
const fs = require('fs')
var db = require('mime-db')
var dquiz = require ('discord-quiz');
const discordcoins = require("discord-coins")
const disbut = require("discord-buttons")
disbut(bot);
const { MessageButton, MessageActionRow } = require("discord-buttons")
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
var version = '1.3';
///------------------------------------------------------------------------------------------------------------------------------
bot.on('ready', () =>{
    console.log('Bot je upravo postao online!');
})
///------------------------------------------------------------------------------------------------------------------------------
bot.once('ready', () => {
    console.log('Index.hr status je spreman!')
    //ispod statis
    bot.user.setActivity('BOT SE AŽURIRA!' , { type: "WATCHING" }) // MOŽE BITI WATCHING, STREAMING, LISTENING
    //ispod automatski mjenjanje statusa
    setInterval(() => {
        const statuses = [
            `index-bot.gq`,
            `discord.ly/indexhr`,
            `!komande`,
            `!stranica`,
            `Juraj Z#8164`,
            `Radio Banovina`,
            `!pomoć`,
            `+komande`,
            `+stranica`,
            `+pomoć`,
            `+info`,
            `!info`,
            `Radio Dalmacija`,
            `Narodni radio`,
            `Otvoreni radio`,
            `!radio`,
            `+radio`,
            `Yammat fm`,
            `Antena zagreb`,
            `index.hr`,
            `!verzija`,
            `+verzija`,
            `Radio 101`,
            `Enter zagreb`,
            `Dobro jutro uz kafu`,
            `Dobro jutro uz cvece`,
            `!jutro`,
            `Extra fm`,
        ]
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, { type: "WATCHING"}) ///MOŽE SE STAVITI WATCHING, STREAMING ILI LISTENING
    }, 4000) ///TO ZNAČI KADA ĆE BOT PROMJENITI STATUS. NPR. 1000 = 1 SEKUNDA!
})
///------------------------------------------------------------------------------------------------------------------------------
const token = '***********************************************************';
bot.login(token);
///------------------------------------------------------------------------------------------------------------------------------
bot.on('ready', () =>{
    console.log('Bot se uspješno pokrenuo!');
})
///--------------------------------DIO ZA KVIZ-----------------------------------------------------------------------------------
dquiz.add_question ("Koji je glavni grad države Ujedinjenih Arapskih Emirata?", 'Abu Dhabi', ['Zagreb', 'Sarajevo', 'Luxemburg']);
dquiz.add_question ("Koji je glavni grad države Nigerije?", 'Abuja', ['Abu Dhabi', 'Ostrog', 'Hamburg']);
dquiz.add_question ("Koji je glavni grad države Gane?", 'Accra', ['Zagreb', 'Beograd', 'Beč']);
dquiz.add_question ("Koji je glavni grad države Etiopije?", 'Adis Abeba', ['Abeba Adis', 'Adris', 'Sarsbig']);
dquiz.add_question ("Koji je glavni grad države Alžira?", 'Alžir', ['Žir', 'Aljazera', 'Aljažir']);
dquiz.add_question ("Koji je glavni grad države Jordana?", 'Aman', ['Gordana', 'Gospić', 'Skopje']);
dquiz.add_question ("Koji je glavni grad države Holandija? (službeni naziv)", 'Amsterdam', ['Ampsterdam', 'Antverpen', 'Pula']);
dquiz.add_question ("Koji je glavni grad države Andore?", 'Andora La Vella', ['Andora', 'Amogus', 'Austrija']);
dquiz.add_question ("Koji je glavni grad države Turske?", 'Ankara', ['Grčka', 'Bern', 'Bejrut']);
dquiz.add_question ("Koji je glavni grad države Madagaskar?", 'Antananarivo', ['Antanar', 'Anona', 'Bogota']);
dquiz.add_question ("Koji je glavni grad države Samoa?", 'Apia', ['Bogota', 'Accra', 'Bogota']);
dquiz.add_question ("Koji je glavni grad države Turkmenistan?", 'Ashgabat', ['Bissau', 'Accrai', 'Bogetia']);
dquiz.add_question ("Koji je glavni grad države Eritreja?", 'Asmara', ['Bis', 'Accri', 'Bogeta']);
dquiz.add_question ("Koji je glavni grad države Kazahstan?", 'Astana', ['Bils', 'Accrbi', 'Bgvogeta']);
dquiz.add_question ("Koji je glavni grad države Paragvaj?", 'Asuncion', ['Astra', 'Accrbi', 'Bgvoge']);
dquiz.add_question ("Koji je glavni grad države Grčke?", 'Atina', ['Atena', 'Aukrešt', 'Beloman']);
dquiz.add_question ("Koji je glavni grad države Irake?", 'Bagdad', ['Beograd', 'Biograd', 'Beloman']);
dquiz.add_question ("Koji je glavni grad države Azerbejdžan?", 'Baku', ['Balo', 'Biko', 'Belonomc']);
dquiz.add_question ("Koji je glavni grad države Mali?", 'Bamako', ['Bagdad', 'Atina', 'Atena']);
dquiz.add_question ("Koji je glavni grad države Brunej?", 'Bandar Seri Begawan', ['Bagod', 'Atina', 'Solomon']);
dquiz.add_question ("Koji je glavni grad države Tajland?", 'Bangkok', ['Bagod', 'Montenegro', 'Santa La Mira']);
dquiz.add_question ("Koji je glavni grad države Srednjoafričke Republike?", 'Bangui', ['Bagod', 'Beru', 'Beroka']);
dquiz.add_question ("Koji je glavni grad države Gambije?", 'Banjul', ['Beograd', 'Bratislava', 'Beroka']);
dquiz.add_question ("Koji je glavni grad države Sveti Kristofor i Nevis?", 'Basseterre', ['Biograd', 'Bratislava', 'Atena']);
dquiz.add_question ("Koji je glavni grad države Austrije?", 'Beč', ['Biograd', 'Ljubljana', 'Apia']);
dquiz.add_question ("Koji je glavni grad države Libana?", 'Bejrut', ['Bejirt', 'Bagdad', 'Aliva']);
dquiz.add_question ("Koji je glavni grad države Belize?", 'Belmopan', ['Beloponez', 'Sirija', 'Apia']);
dquiz.add_question ("Koji je glavni grad države Srbije?", 'Beograd', ['Biograd', 'Ljubljana', 'Novi Sad']);
dquiz.add_question ("Koji je glavni grad države Njemačke?", 'Berlin', ['Ankara', 'Milano', 'Moskva']);
dquiz.add_question ("Koji je glavni grad države Kirgistan?", 'Bishkek', ['Biskek', 'Biloston', 'Moskva']);
dquiz.add_question ("Koji je glavni grad države Švicarske?", 'Bern', ['Berlin', 'Ber', 'Bero']);
dquiz.add_question ("Koji je glavni grad države Gvineja Bisau?", 'Bissau', ['Bisau', 'Ber', 'Bero']);
dquiz.add_question ("Koji je glavni grad države Južnoafrička Republika?", 'Beloemfontein', ['Beloemfmeos', 'Belo', 'Beloe']);
dquiz.add_question ("Koji je glavni grad države Kolumbija?", 'Bogota', ['Bigota', 'Betosaurus', 'Bero']);
///------------------------------------------------------------------------------------------------------------------------------
bot.on ('message', (message) => {
    if(message.content.toLowerCase().startsWith('!kviz'))
        dquiz.quiz(message, 10, 'ffb7c5')
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'info_kviz':
            const Embed = new MessageEmbed()
            .setTitle("KAKO KORISTITI KVIZ?")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('NEMOJTE ODMAH REAGIRATI NA PORUKU!', 'Bot je spor i neće vam priznati odgovor ako odmah reagirate na poruku!')
            .addField('KOLIKO IMAM VREMENA DA REAGIRAM NA PORUKU?', 'Nakon što bot pošalje pitanje, imate 6 sekundi da odgovorite na pitanje!')
            message.reply(Embed);
        break;
    };  
});
///--------------------------------------------------------ZAVRŠAVA DIO ZA KVIZ----------------------------------------------------
///--------------------------------------------------------POČINJE DATABAZA OD BOTA------------------------------------------------
mongoose.connect(process.env.Indexbot, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false
}).then(()=>{
    console.log('Index.hr bot se uspješno spojio u databazu!');
}).catch((err) =>{
    console.log(err);
});
///-------------------------------------------------------ZAVRŠAVA DATABAZA OD BOTA------------------------------------------------
///--------------------------------------------------------POČINJU OBIČNE KOMANDE--------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'info':
            const Embed = new MessageEmbed()
            .setTitle("INFORMACIJE O BOTU:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setColor(0xFF0000)
            .setDescription("Verzija bota: `3.5`, Copyright © Juraj Zečić - sva prava zauzeta.");
            message.author.send(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'verzija':
            const Embed = new MessageEmbed()
            .setTitle("VERZIJA:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setColor(0xFF0000)
            .setDescription("Verzija bota: `3.5`");
 
            message.author.send(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
///--------------------------------------------MIKROVALNE KOMANDA----------------------------------------------------------------
bot.on('message', (message) => {
    if (message.content.startsWith('!microwave')) {   
     const microwave = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoG-6s-H4voVE6XknaftYZIqh36p5eM1Uhw&usqp=CAU',
      'https://thegoodguys.sirv.com/products/50063479/50063479_684052.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90',
      'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/03/pjimage-1-1553843057.jpg',
      'https://static.toiimg.com/photo/76690450.cms',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRADaQOh7rq941wHRLtAuB2tfP4VfeYIn8A&usqp=CAU',
      'https://cdn.bigchill.com/media/catalog/product/cache/6b1c09900b407c50fce2db5e66ebc123/r/e/retro_microwave_blue1_2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvG5FtzpnxiNVfcFdYxHQf6bUK-gPm-TjJw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7lwLAxqT9OoEsoNhiQwCVWmzcCiAnr3vQw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVpbGmarzT0R5Xn7lnal7fT6ZFWuPc_BhPw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqy8wJsd3-hgSpE8UK41-NEy9ZFWKDQgB6A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusLcYd9R8mjo5ZLLIduclb9N6h0GLB71VHA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33XwInjVCk6ugsE97Duho06RnbDSGS_hrQg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMHUswaZabBeewa6pUWDNyk-GIWZm0hpnGg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVO9c0cFwi4y5UGLDAZaAVQ1aHqCQOx-Tuw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPEBbqXiLnfW7qNE9it4Q3GMmj8KcIYyLtg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-89rgGPgKpTYK_Ls_3-oLM22p_qy9pbUv3A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMWReNA3AaxsWD5WYlMyVrRZKjM9-byWVLQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF66K62AYyYvOJ_sWC_oMU6xCyGZNea2tAlA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzxiSyO8f2cy1-Q5ST8pdSmeDdOcZsWxvHw&usqp=CAU',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/microwave-bread-1585575737.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNXbECTFMbCZP6zN6n7p1YUqUxbOmOTqV1Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLNvc_6S19lcFT1Hli0TCKXHJdFBTybUDTg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbjNmQRmIvgGCWqJfbdw98vJgFvgRjduXYQ&usqp=CAU',
      'https://www.thespruce.com/thmb/Aw7i8-jg_Y21EZqXFkvFOxIrJhs=/1000x667/filters:no_upscale():max_bytes(150000):strip_icc()/baking-soda-in-the-microwave-1900607-06-659ab96305ac4bb6b9385a412fa21443.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRSCLVza0m8jx51rpIjeHOaGOiQZ6Vr9o5g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ea0BFqxznEoHiurenLKI1aRfx1uKRd17Mw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3LhmV9-rCR64SLJ0bj1fAi0IC3DFpNdorA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKYZtZ5EKFfKn6oSQtSOeIoFV0QTg0tocsg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmsZtV1wGrWCZdgWDaG3MG2aCxY4t5fALVQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1zgrxjaHZkfu0vIBUHN7X1xfpu4UMC50hg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtl8oCJtUrkIkrqtx6Nl30hZ1M1HaG-gK0g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AcrtQ6-cUUrqyf8QRHxOJVQuhCnAbmCEEQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCYs-eg897GQjZov4L3viA4b-QBxBRHew5Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxpZCVDPRzKzzj1JW9_um7YetHHf8HfrX4w&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hXoM4CtLfY3fSDZc4unaByGNbfpDcc7ICw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEwXOqZYL_uwCB-tClZxTr5Ik70jKDx9p2A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayvCIeZRWSTjc4FK0iCNLS4iyCyOlPSMI1Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3PfIH-xxh14bzlK5fc8x5svrudWVK_fttg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCutujHMRMcIycwy8T6iV9NgKRydTQC2GXIA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1UZjkf_sflQoPyMcBeDOQCdCuE5xBAYBvg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DRikmCVrowfyrBnaVZ2C7jnCv6-jV8SAkw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHSSepEBsLhsxhjOX5nym90m88ewRppboXA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP9vLC8emHMxRlPhDGZsW4TfzFGtGDt1Paw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_hVSX1fTVhxL2F1Rp4lOJDl6bQiMTw_R3Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTcBmPpHMUmAqkOUpQ-Xs-JxzDy67m89UQg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwMawffLYTBJARrurf-P7zsVv5GWar-61Wg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3dGs0Bla39wt5PZKs_kzed0j00iVXlbmmg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaiTZphaz3X6X0A3rg_6uGbmYpwliywzB8g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDhAJwjzzsiZ8id98wEk8CiLPgJSGqSn1ag&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JgUpDEPiLDvZ4rsLREeE4jOLfAfz2q7Fag&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5n0e_Z9WLM_VkCI0sHjBY5AJIHgEq0CFiSg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01Wmp5sH4lSfW3ggV5zcfmWTaFCT1qhqjnw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4KVKU27DzR_GLkqwqOR2yiq0_u0xRHkpRA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5enZTEVsoqh04cMI6GBXJSBYSIZElyfcYRQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9L0d5IcL9IUcAq0Lba4ROPmjPZl6Azg_VQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGZc0OjJaZ_j73ratB_bCzWjwmDYPM1k-OA&usqp=CAU',
     ];
     const response = microwave[Math.floor(Math.random() * microwave.length)];
     message.reply(response);
    }
});
///--------------------------------------------ZAVRŠAVA KOMANDA MIKROVALNE-----------------------------------------------------------------------------------------------------------------------------------------
///--------------------------------------------------NASTAVLJAJU SE OBIČNE KOMANDE------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'hdz':
            const Embed = new MessageEmbed()
            .setTitle("HDZ")
            .setImage('https://cdn.shopify.com/s/files/1/0013/6819/5124/products/NOHDZ_1024x1024.png?v=1614246838')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'hžpp':
            const Embed = new MessageEmbed()
            .setTitle("HŽPP")
            .setImage('https://dugoselo.hr/wp-content/uploads/2018/07/vlak.jpg')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'hzpp':
            const Embed = new MessageEmbed()
            .setTitle("HŽPP")
            .setImage('https://dugoselo.hr/wp-content/uploads/2018/07/vlak.jpg')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'zabrana':
            const Embed = new MessageEmbed()
            .setTitle("ZABRANA")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/88edd0e3-407a-4406-9eb2-41a781c47f2f.jpg?width=765&height=402')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'reakcija':
            message.channel.send('`Index.hr` je reagirao na vašu poruku!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'juraj':
            message.channel.send('`Index.hr` je reagirao na vašu poruku!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'index':
            message.channel.send('`Index.hr` je reagirao na vašu poruku!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'hdz':
            message.channel.send('`Index.hr` je reagirao na vašu poruku!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'crazy_hamburger':
            message.channel.send('`Crazy hamburger!`').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------

///--------------------------------KOMANDE---------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'komande':
            const Embed = new MessageEmbed()
            .setTitle("KOMANDE ZA BOTA:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('SLIKE:', '`!hdz, !zabrana, !hžpp, !kuhinja, !dobro jutro`')
            .addField('VIJESTI:', '`!vijesti`')
            .addField('OSTALO:', '`!reakcija, !microwave, !index_greska, !random, !društvene_mreže, !crazy_hamburger, !kviz, !info_kviz, !uno_komande, !portali`')
            .addField('OSTALO 2:', '`!banka, !nasumični_brojevi, !radio, !božić, !nova_godina`')
            .addField('O BOTU:', '`!verzija, !info, !pomoć, !pozovi_bota, !stranica`')
            message.reply(Embed);
        break;
    };  
});
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'commands':
            const Embed = new MessageEmbed()
            .setTitle("COMMANDS FOR BOT:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('SLIKE:', '`!hdz, !zabrana, !hžpp, !kuhinja, !dobro jutro`')
            .addField('VIJESTI:', '`!vijesti`')
            .addField('OSTALO:', '`!reakcija, !microwave, !index_greska, !random, !društvene_mreže, !crazy_hamburger, !kviz, !info_kviz, !uno_komande, !portali`')
            .addField('OSTALO 2:', '`!banka, !nasumični_brojevi, !radio, !božić, !nova_godina`')
            .addField('O BOTU:', '`!verzija, !info, !pomoć, !pozovi_bota, !stranica`')
            message.reply(Embed);
        break;
    };  
});
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'pomoć':
            const Embed = new MessageEmbed()
            .setTitle("KOMANDE ZA BOTA:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('SLIKE:', '`!hdz, !zabrana, !hžpp, !kuhinja, !dobro jutro`')
            .addField('VIJESTI:', '`!vijesti`')
            .addField('OSTALO:', '`!reakcija, !microwave, !index_greska, !random, !društvene_mreže, !crazy_hamburger, !kviz, !info_kviz, !uno_komande, !portali`')
            .addField('OSTALO 2:', '`!banka, !nasumični_brojevi, !radio, !božić, !nova_godina`')
            .addField('O BOTU:', '`!verzija, !info, !pomoć, !pozovi_bota, !stranica`')
            message.author.send(Embed);
        break;
    };  
});
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) { 
        case 'pomoc':
            const Embed = new MessageEmbed()
            .setTitle("KOMANDE ZA BOTA:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('SLIKE:', '`!hdz, !zabrana, !hžpp, !kuhinja, !dobro jutro`')
            .addField('VIJESTI:', '`!vijesti`')
            .addField('OSTALO:', '`!reakcija, !microwave, !index_greska, !random, !društvene_mreže, !crazy_hamburger, !kviz, !info_kviz, !uno_komande, !portali`')
            .addField('OSTALO 2:', '`!banka, !nasumični_brojevi, !radio, !božić, !nova_godina`')
            .addField('O BOTU:', '`!verzija, !info, !pomoć, !pozovi_bota, !stranica`')
            message.author.send(Embed);
        break;
    };  
});
///--------------------------------KOMANDE------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', (message) => {
    if (message.content.startsWith('!random')) {
     const random = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmK2fe4MdfyUhJraexipjCSp2t0r5_6dna0Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzi-5EyHZ0km3JUM297bsjQ-T_hikY2DF-A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEmXprk_UaLj2gdc0DJtQn_oHNhh4IisVog&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tjBZRmKu9PPfVP4_WediKjh2CiGSJsU5gA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwDh5whF12ro1gjpLY-1_KSWBuEKIFemVWg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_-MAi8j-GfLp3p4YQlK6xQwAoqFj-UT-BQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6rWVwRnLE8awGbR5OsIy-WTxgOQRTmiDgQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOFsoUFsT0GklRnEras-PwaAQ7woP7NIUrg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAH8Q_DprHctEyX-2q35SnIC0z3SJI4PIR6Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94fOXG4sSDTmJESb_xDlI-obsQfLaXbnxxg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYS0hU3cxBktQp8_c6Nk5New0Y-bwZPB4cQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD7Y75ytkLx5nEbpLFuN73hmvSmMhfsPKHQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN6SWvBNR53mtRfdD4FAxJzTHXbFJcj6ZxA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusCUdKsccaxAnl0qdlxdtGFnU9mbAky8NvQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBbmHDHeGdTmF1wqbfHfiePzIncczzrM4gQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Tp7joLxzk2InpARnsRH2Vh_DPo_xZHy3fg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxO9_5OXkyvVWmYIkpD9P3mYU_3J3GvKtjhQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUqLyeI7vOMk7ad7IAG6WDaKa7nI33khkLQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_C1FV-4ObVXUOoqF1yWpLYvNk_kw8d6guQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqb9DzfkaCUS5H35Co_yI61hhbrRKUGQc5g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72hXA6jYGR4P9lTNZEUL1yWdSgKI9vIvmeg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJwNrBrZQcxw3b3POQwaNtyKdpeM2pAQ7jg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1XyAHZaJQeLDKnrtP7unKqp-GDOoobtI3Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWuLG0spXCEEx2wptg4lyikCyPsfkoyRGRqg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqy24reheGqCdi46s6miQFytn3aIhv0Jpeow&usqp=CAU',
     ];
     const response = random[Math.floor(Math.random() * random.length)];
     message.reply(response);
    }
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'index_greska':
            const Embed = new MessageEmbed()
            .setTitle("INDEX_GRESKA")
            .setImage('https://cdn.discordapp.com/attachments/787300019882426370/816079624178106398/Izrezak.JPG')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'vijesti':
            const Embed = new MessageEmbed()
            .setTitle("VIJESTI:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('VIJESTI:', 'https://www.index.hr/')
            .addField('NAJNOVIJE:', 'https://www.index.hr/najnovije?kategorija=3')
            .addField('NAJČITANIJE:', 'https://www.index.hr/najcitanije?kategorija=3')
            .addField('HRVATSKA:', 'https://www.index.hr/vijesti/rubrika/hrvatska/22.aspx')
            .addField('ZAGREB:', 'https://www.index.hr/vijesti/rubrika/zagreb/1553.aspx')
            .addField('REGIJA:', 'https://www.index.hr/vijesti/rubrika/regija/1540.aspx')
            .addField('EU:', 'https://www.index.hr/vijesti/rubrika/eu/5040.aspx')
            .addField('SVIJET:', 'https://www.index.hr/vijesti/rubrika/svijet/23.aspx')
            .addField('ZNANOST:', 'https://www.index.hr/vijesti/rubrika/znanost/1722.aspx')
            .addField('CRNA KRONIKA:', 'https://www.index.hr/vijesti/rubrika/crna-kronika/46.aspx')
            .addField('KOMENTARI:', 'https://www.index.hr/vijesti/rubrika/komentari/1413.aspx')
            .addField('NOVAC:', 'https://www.index.hr/vijesti/rubrika/novac/1554.aspx')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'društvene_mreže':
            const Embed = new MessageEmbed()
            .setTitle("INDEX.HR DRUŠTVENE MREŽE:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('FACEBOOK:', 'https://www.facebook.com/index.hr/')
            .addField('INSTAGRAM:', 'https://www.instagram.com/index.hr/?hl=hr')
            .addField('YOUTUBE:', 'https://www.youtube.com/channel/UCUp6H4ko32XqnV_6MOPunBA')
            message.reply(Embed);
        break;
    };  
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'drustvene_mreze':
            const Embed = new MessageEmbed()
            .setTitle("INDEX.HR DRUŠTVENE MREŽE:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('FACEBOOK:', 'https://www.facebook.com/index.hr/')
            .addField('INSTAGRAM:', 'https://www.instagram.com/index.hr/?hl=hr')
            .addField('YOUTUBE:', 'https://www.youtube.com/channel/UCUp6H4ko32XqnV_6MOPunBA')
            message.reply(Embed);
        break;
    };  
});
///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', (message) => {
    if (message.content.startsWith('!crazy_hamburger')) {   
     const crazy_hamburger = [
      'https://i.ytimg.com/vi/pVbtFP40E50/maxresdefault.jpg',
      'https://f4.bcbits.com/img/a3041143642_10.jpg',
      'http://storage.googleapis.com/zagat-article-ss/10lbmonsterburgerMallies1.jpg',
      'https://assets.change.org/photos/9/du/gd/GlduGDLZIAkaVYK-1600x900-noPad.jpg?1598454828',
      'https://i.pinimg.com/originals/f1/c5/d6/f1c5d6d0cb75027a5b075387ec935f64.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLaGJqaO2j4APBhJn1-6r9enGKqeKA73xcg&usqp=CAU',
      'https://i.ytimg.com/vi/rtvmHglNA6Q/maxresdefault.jpg',
      'https://preview.redd.it/ddn8ejkp64h51.gif?format=png8&s=0ce5509016d744a2164ff7c0d7f428fbc32407c5',
      'https://i.ytimg.com/vi/G5aBL6OXES4/hqdefault.jpg',
      'https://i.redd.it/qlf3akpqysx51.png',
      'https://i.ytimg.com/vi/GJB_FFe5w58/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUr8ZoUL3iVBCOuJkEIZaGKboI2yqdLWOQQ&usqp=CAU',
      'https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/d4a67555826/e80d3231b081f64e6b1ff/ios_large_1598987641_image.jpg',
      'https://friendlystock.com/wp-content/uploads/2018/04/2-goofy-crazy-eyes-hamburger-emoji-cartoon-clipart.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81sYqZyZkYL._SY400_.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2D_H6-l5HI9CPEijifCPtBfUeKVN__VtE0Q&usqp=CAU',
      'https://i.ytimg.com/vi/3S52ADkjjMc/maxresdefault.jpg',
      'https://static.wikia.nocookie.net/bear-alpha-submissions/images/c/c8/Cheezburger.png/revision/latest?cb=20201004190040',
      'https://i.imgur.com/EQgil3g.jpg',
      'https://c2.thejournal.ie/media/2015/01/aptopix-naughty-nurses-752x501.jpg',
      'https://media.tenor.com/images/4392a606e2a55a7787fb7128ff070900/tenor.png',
      'https://i.ytimg.com/vi/pVbtFP40E50/mqdefault.jpg',
      'https://i.ytimg.com/vi/q8g7zD6vl4I/maxresdefault.jpg',
     ];
     const response = crazy_hamburger[Math.floor(Math.random() * crazy_hamburger.length)];
     message.reply(response);
    }
});
///------------------------------------------------------------------------------------------------------------------------------
///--------------------------------------------------------------------------UNO DIO----------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'uno_komande':
            const Embed = new MessageEmbed()
            .setTitle("KOMANDE ZA UNO:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('POKRETANJE RUNDE:', 'Runda se radi sa komandom `!napravirundu`, drugi se pridružuju u rundu sa komandom `!pridružise`, kada se svi pridruže u rundu, runda se pokreće sa komandom `!pokrenirundu`!')
            .addField('U RUNDI:', 'Kartu bacate sa komandom `!baci [ime karte (na engleskom dok ne prevedem)]`. Ako nemate kartu koja je bačena, možete izvuči kartu sa komandom `!izvucikartu`, da ponovno vidite svoje karte možete koristiti komandu `!karte` možete i zatvoriti rundu sa komandom `!zatvorirundu` ili `završirundu`, te dvije komande može koristiti samo onaj koji je rundu napravio! Iz runde se može i izaći, može se sa komandom `!izađi`,')
            .addField('NA KRAJU RUNDE:', 'Možete vidjeti tko je pobjedio sa `!pobjednici`')
            .addField('POSTAVKE RUNDE:', 'Možete vidjeti postavke runde sa komandom `!postavke`')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'napravirundu':
            const Embed = new MessageEmbed()
            .setTitle("KOMANDE ZA UNO:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('POKRETANJE RUNDE:', 'Runda se radi sa komandom `!napravirundu`, drugi se pridružuju u rundu sa komandom `!pridružise`, kada se svi pridruže u rundu, runda se pokreće sa komandom `!pokrenirundu`!')
            .addField('U RUNDI:', 'Kartu bacate sa komandom `!baci [ime karte (na engleskom dok ne prevedem)]`. Ako nemate kartu koja je bačena, možete izvuči kartu sa komandom `!izvucikartu`, da ponovno vidite svoje karte možete koristiti komandu `!karte` možete i zatvoriti rundu sa komandom `!zatvorirundu` ili `završirundu`, te dvije komande može koristiti samo onaj koji je rundu napravio! Iz runde se može i izaći, može se sa komandom `!izađi`,')
            .addField('NA KRAJU RUNDE:', 'Možete vidjeti tko je pobjedio sa `!pobjednici`')
            .addField('POSTAVKE RUNDE:', 'Možete vidjeti postavke runde sa komandom `!postavke`')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'napravirundu':
            const Embed = new MessageEmbed()
            .setTitle("OBAVIJEST:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('KOMANDE U RUNDI', 'Ako nećete znati neku komandu, možete pogledati listu UNO komanda sa komandom `!uno_komande`')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'pokrenirundu':
            const Embed = new MessageEmbed()
            .setTitle("OBAVIJEST:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('KOMANDE U RUNDI', 'Ako nećete znati neku komandu, možete pogledati listu UNO komanda sa komandom `!uno_komande`')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
const { DiscordUNO } = require("discord-uno");
const discordUNO = new DiscordUNO(); /** You can add an optional string to the class, 
                                    this string (color) will be the color for all embeds that 
                                    are sent. ie: new DiscordUNO("RED"), any Discord ColorResolvable
                                    will work. **/
bot.on("ready", () => {
    console.log("UNO proširenje je spremno za index.hr bota!");
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!napravirundu")
        await discordUNO.createGame(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!pridružise")
        await discordUNO.addUser(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!izađi")
        await discordUNO.removeUser(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!pokrenirundu")
        await discordUNO.startGame(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!završirundu")
        await discordUNO.endGame(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!zatvorirundu")
        await discordUNO.closeGame(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase().startsWith("!baci"))
        await discordUNO.playCard(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase().startsWith("!UNO"))
        await discordUNO.UNO(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!izvucikartu")
        await discordUNO.draw(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!karte")
        await discordUNO.viewCards(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!pobjednici")
        await discordUNO.viewWinners(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!postavke") 
        await discordUNO.viewSettings(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!stol")
        await discordUNO.viewTable(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!baci")
        await discordUNO.viewTable(message);
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if (message.content.toLowerCase() === "!izvucikartu")
        await discordUNO.draw(message);
});
///--KOMANDE KOJE MOŽDA NE RADE ZA UNO---------------------------------------------------------------------------------------------------------------------------------------------------
///-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'pozovi_bota':
            const Embed = new MessageEmbed()
            .setTitle("POVEZNICA OD INDEX.HR BOTA!")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('LINK ZA DODAVANJE INDEX.HR BOTA NA SERVER:', 'https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'invite':
            const Embed = new MessageEmbed()
            .setTitle("POVEZNICA OD INDEX.HR BOTA!")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('LINK ZA DODAVANJE INDEX.HR BOTA NA SERVER:', 'https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'invite':
            const Embed = new MessageEmbed()
            .setTitle("POVEZNICA OD INDEX.HR BOTA!")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('LINK ZA DODAVANJE INDEX.HR BOTA NA SERVER:', 'https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            message.author.send(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'pozovi_bota':
            const Embed = new MessageEmbed()
            .setTitle("POVEZNICA OD INDEX.HR BOTA!")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('LINK ZA DODAVANJE INDEX.HR BOTA NA SERVER:', 'https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            message.author.send(Embed);
        break;
    };  
});
///-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'portali':
            const Embed = new MessageEmbed()
            .setTitle("PORTALI:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('1. INDEX.HR', 'https://www.index.hr/')
            .addField('2. VEČERNJI', 'https://www.vecernji.hr/')
            .addField('3. TPORTAL', 'https://www.tportal.hr/')
            .addField('4. N1', 'https://hr.n1info.com/')
            .addField('5. JUTARNJI', 'https://www.jutarnji.hr/')
            .addField('6. NET.HR', 'https://net.hr/')
            .addField('7. HRT', 'https://www.hrt.hr/')
            .addField('8. SLOBODNA DALMACIJA', 'https://slobodnadalmacija.hr/')
            .addField('9. GLAS ISTRE', 'https://www.glasistre.hr/')
            .addField('10. SLOBODNA LIKA', 'https://slobodnalika.com/')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
const prefix = "!"
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", message => {
    const Embed = new MessageEmbed()
    if (message.content === `${prefix}račun`) {
    let Balance = discordcoins.Balance(message.author.id)
    message.channel.send(`Na računu imate: ${Balance}!`)
    }
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", message => {
    if (message.content === `${prefix}dodaj`) {
        let Add = discordcoins.Add(message.author.id, 145640) //100 is the amount you want to add.
        message.channel.send(Add)
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'banka':
            const Embed = new MessageEmbed()
            .setTitle("IVAN PERNAR BANKA:")
            .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdVDxWrE7t3EXn1kS1JR8H157aeC2Kx7x-A&usqp=CAU')
            .setThumbnail('https://medjimurjepress.net/wp-content/uploads/2019/11/75341027_422895001717177_9082813120354713600_n.jpg')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('KAKO RADI BANKA?', 'Banka ima dvije komande! Jedna je komanda `!dodaj`, komanda vam dodava 145640 kuna na vaš račun! A druga komanda je `!račun`, na kojoj možete vidjeti koliko vam je stanje na računu! Da nebi komanda bila spamana, Ivan Pernar je došao do ideje da se nakon svakog puta kada se ugasi bot i ponovno upali, resetiraju se kune da vas Ivan Pernar može pokrasti!(**Resetiraju se kune zato što mi ne radi databaza!**)')
            .addField('**INFORMACIJA!**', '**OVO JE SAMO TEST KOMANDA! PRAVA BANKA BUDE DOŠLA USKORO!**')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', (message) => {
    if (message.content.startsWith('!broj_10')) {   
     const crazy_hamburger = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
     ];
     const response = crazy_hamburger[Math.floor(Math.random() * crazy_hamburger.length)];
     message.reply(response);
    }
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', (message) => {
    if (message.content.startsWith('!broj_5')) {   
     const crazy_hamburger = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
     ];
     const response = crazy_hamburger[Math.floor(Math.random() * crazy_hamburger.length)];
     message.reply(response);
    }
});
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'nasumični_brojevi':
            const Embed = new MessageEmbed()
            .setTitle("NASUMIČNI BROJEVI:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('ZA SLUČAJNI ODABIR BROJA OD `0-10`:', 'Komanda: `!broj_10`')
            .addField('ZA SLUČAJNI ODABIR BROJA OD `0-5`:', 'Komanda: `!broj_5`')
            message.reply(Embed);
        break;
    };  
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'nasumicni_brojevi':
            const Embed = new MessageEmbed()
            .setTitle("NASUMIČNI BROJEVI:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('ZA SLUČAJNI ODABIR BROJA OD `0-10`:', 'Komanda: `!broj_10`')
            .addField('ZA SLUČAJNI ODABIR BROJA OD `0-5`:', 'Komanda: `!broj_5`')
            message.reply(Embed);
        break;
    };  
});
///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'test':
            const Embed = new MessageEmbed()
            .setTitle("PORTALI:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setDescription('MOŽETE ODABRATI SAMO 5 PORTALA!')
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('INDEX', '🇦')
            .addField('VEČERNJI LIST', '🇧')
            .addField('JUTARNJI LIST', '🇨')
            .addField('N1', '🇩')
            .addField('SLOBODNA DALMACIJA', '🇪')
            .addField('GLAS ISTRE', '🇫')
            .addField('TPORTAL', '🇬')
            .addField('NET', '🇭')
            .addField('BUG', '🇮')
            .addField('POSLOVNI DNEVNIK' , '🇯')
            .addField('SREDNJA', '🇰')
            .addField('SLOBODNA LIKA', '🇱')
            .addField('TELEGRAM', '🇲')
            .addField('24SATA', '🇳')
            message.reply(Embed);
        break;
    };  
});
///-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'kuhinja':
            const Embed = new MessageEmbed()
            .setTitle("KUHINJA PRVE ŽENE ZAGREBA:")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/cc0ddbbf-4969-4ec1-800d-b483997cba08.jpg?width=765&height=562')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});
///------------------------------------------------------------------------------------------------------------------------------
///----------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'radio':
            const Embed = new MessageEmbed()
            .setTitle("RADIO:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setDescription('Komande koje se koriste za slušanje radija.')
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField('OTVORENI RADIO', '`!play https://bit.ly/otvoreni`')
            .addField('BANOVINA TURBO RADIO', '`!play https://bit.ly/banovina-turbo`')
            .addField('NARODNI RADIO', '`!play https://bit.ly/narodnii`')
            .addField('RADIO DALMACIJA', '`!play https://bit.ly/dalmacijaa`')
            .addField('YAMMAT FM', '`!play https://bit.ly/yammat`')
            .addField('ANTENA ZAGREB', '`!play https://bit.ly/antenaaa`')
            .addField('RADIO 101', '`!play https://bit.ly/radio-101`')
            .addField('ENTER ZAGREB', '`!play https://bit.ly/enter-zg`')
            .addField('EXTRA FM', '`!play https://bit.ly/extra-fm`')
            message.reply(Embed);
        break;
    };  
});
///--------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'info':
            message.channel.send('Pogledajte DM!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'verzija':
            message.channel.send('Pogledajte DM!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'pomoć':
            message.channel.send('Pogledajte DM!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'invite':
            message.channel.send('Pogledajte DM!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'pozovi_bota':
            message.channel.send('Pogledajte DM!').then(message.react('😉'));
        break;
    }
})
///------------------------------------------------------------------------------------------------------------------------------
bot.on("message", message => {
    if (message.content == "!stranica") {
        var button1 = new MessageButton()
            .setLabel("Stranica u iskočnom zaslonu")
            .setStyle("url")
            .setURL("https://www.index-bot.gq/")
        var button2 = new MessageButton()
            .setLabel("Stranica u tekstualnom obliku")
            .setStyle("red")
            .setID("ciao")

        var row = new MessageActionRow()
            .addComponent(button1)
            .addComponent(button2)

        var embed = new MessageEmbed()
        .setTitle("STRANICA OD INDEX.HR BOTA SE NALAZI OVDJE!")
        .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
        .setURL('https://www.index-bot.gq/')
        .setTimestamp()
        .setColor(0xFF0000)
        .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
        .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
        .setColor(0xFF0000)
        .setDescription("https://www.index-bot.gq/");

        message.channel.send(embed, row)
    }
    if (message.content == "!neradikomande") {
        var option1 = new MessageMenuOption()
            .setLabel("SLIKE")
            .setDescription("Slike sa bota!")
            .setValue("slike")
            .setEmoji("😀")
        var embed = new MessageEmbed()    
            .setTitle("STRANICA OD INDEX.HR BOTA SE NALAZI OVDJE!")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://www.index-bot.gq/')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setColor(0xFF0000)
            .setDescription("https://www.index-bot.gq/");        

        var option2 = new MessageMenuOption()
            .setLabel("VIJESTI")
            .setDescription("Vijesti na botu!")
            .setValue("vijesti")
            .setEmoji("😀")

        var option3 = new MessageMenuOption()
            .setLabel("OSTALO")
            .setDescription("Ostale komande!")
            .setValue("ostalo")
            .setEmoji("😀")

        var option4 = new MessageMenuOption()
            .setLabel("OSTALO 2")
            .setDescription("Ostale komande!")
            .setValue("ostalo 2")
            .setEmoji("😀")

        var option5 = new MessageMenuOption()
            .setLabel("O BOTU")
            .setDescription("O index.hr discord botu!")
            .setValue("o botu")
            .setEmoji("😀")

        var menu = new MessageMenu()
            .setPlaceholder("Odaberite ovdje!")
            .setID("menu")
            .setMinValues(1)
            .setMaxValues(2)
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
            .addOption(option4)
            .addOption(option5)

        message.channel.send("Sve komande od bota nalaze se ovdje:", menu)
    }
})
bot.on("clickButton", (button) => {
    if (button.id == "ciao") {
        button.reply.send("https://www.index-bot.gq/", true)
    }
})
bot.on("clickMenu", (menu) => {
    if (menu.id == "menu") {
        menu.reply.defer()
        if (menu.values[0] == "slike")          
            menu.message.channel.send("1", komande)
        if (menu.values[0] == "vijesti")
            menu.message.channel.send("vijesti")
        if (menu.values[0] == "ostalo")
            menu.message.channel.send("ostalo")
        if (menu.values[0] == "ostalo 2")
            menu.message.channel.send("ostalo 2")
        if (menu.values[0] == "o botu")
            menu.message.channel.send("o botu")
    }
})
bot.on("clickMenu", (komande) => { 
    switch (args[0]) { 
        case 'kuhinja':
            const Embed = new MessageEmbed()
            .setTitle("KUHINJA PRVE ŽENE ZAGREBA:")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/cc0ddbbf-4969-4ec1-800d-b483997cba08.jpg?width=765&height=562')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            message.reply(Embed);
        break;
    };  
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'nova_godina':
            const Embed = new MessageEmbed()
            .setTitle("NOVA GODINA:")
            .setImage('https://www.eurotopics.net/cache/images/5/204755-medium_logo-teaser300.png?367BC')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField("NOVA GODINA JE ZA: <t:1640991599:R>", "petak, 31. prosinca 2021 23:59:59")
            message.reply(Embed);
        break;
    };  
});


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'bozić':
            const Embed = new MessageEmbed()
            .setTitle("BOŽIĆ:")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/c1fd2d4e-3401-4ff1-b470-dab79421bf95.jpg')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField("BOŽIĆ JE ZA: <t:1640386800:R>", "subota, 25. prosinca 2021 0:00:00")
            message.reply(Embed);
        break;
    };  
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'bozic':
            const Embed = new MessageEmbed()
            .setTitle("BOŽIĆ:")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/c1fd2d4e-3401-4ff1-b470-dab79421bf95.jpg')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField("BOŽIĆ JE ZA: <t:1640386800:R>", "subota, 25. prosinca 2021 0:00:00")
            message.reply(Embed);
        break;
    };  
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'božic':
            const Embed = new MessageEmbed()
            .setTitle("BOŽIĆ:")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/c1fd2d4e-3401-4ff1-b470-dab79421bf95.jpg')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField("BOŽIĆ JE ZA: <t:1640386800:R>", "subota, 25. prosinca 2021 0:00:00")
            message.reply(Embed);
        break;
    };  
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) { 
        case 'božić':
            const Embed = new MessageEmbed()
            .setTitle("BOŽIĆ:")
            .setImage('https://ip.index.hr/remote/indexnew.s3.index.hr/c1fd2d4e-3401-4ff1-b470-dab79421bf95.jpg')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .setURL('https://discord.com/oauth2/authorize?client_id=814612109077512213&scope=bot&permissions=8')
            .setTimestamp()
            .setColor(0xFF0000)
            .setAuthor('Index.hr', 'https://www.index.hr/Content/img/logo/index_logo_112x112.png')
            .setFooter('Index.hr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VDnt3kZ6RA3UE_QAq-lmCLJK7l__EgsIkA&usqp=CAU')
            .addField("BOŽIĆ JE ZA: <t:1640386800:R>", "subota, 25. prosinca 2021 0:00:00")
            message.reply(Embed);
        break;
    };  
});

bot.on('message', (message) => {
    if (message.content.startsWith('!jutro')) {
     const random = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFnePmJbO_OPyP3fyAROGCNqdPgOdjLYWjA&usqp=CAU',
      'https://lh3.googleusercontent.com/proxy/tKQ7YF6dzCY2nUjYGY4a9RKZZFmzey9zIOuAeGNmV6YEKQ7inBL2WU-IvKXLGt_zYk_nGRe5a0EOcNYMNlRUZQrcnTg-DWFJ=w1200-h630-pd',
      'https://i.pinimg.com/originals/f5/e3/42/f5e3424b6f6438a77802f62b5b07a3ff.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPukA36mRljQaMBqtHjoYGS5cw1XTKH67Kg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1OD44UAIL1CA8ddByM5ZapZQ2GXq4na-9Q&usqp=CAU',
      'https://cdn.discordapp.com/attachments/787300019882426370/919539993842696222/preuzmi.jpg',
      'https://cdn.discordapp.com/attachments/787300019882426370/919506507018690560/kafa_loncar.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0g7gy-sXE6EQHdIZoSdJ4CUqVuYTkC7kVA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl0w5JHA94jjLuuAVC6shuluBtfdSddIzpQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyq1nqubtiJFdGPfyRWMMGPvm8lAS_3pk9w&usqp=CAU',
      'https://i.pinimg.com/600x315/fb/f2/ac/fbf2acef99952fe7cbbebcee58ac8590.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WydDEM02N7XistynTj301Iuq2At7Iw-uIxaPaARdzq2vX8I8Nbz8Q_hmLWlbWhskSHg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI_55bfPec15HvNXHzSUQaImJHS4FuWhmyANk1rso39eHGVg5SJ5POK6uCWZEr3yVitA&usqp=CAU',
      'https://image.winudf.com/v2/image1/Y29tLm5ld2FuZHJvbW8uZGV2MjcwOTYuYXBwODYxMjIzX3NjcmVlbl8wXzE1OTY4MDE2MTZfMDU0/screen-0.jpg?fakeurl=1&type=.jpg',
      'https://i.pinimg.com/474x/62/18/30/6218304589c8cf9039f9bf4982efd8ae.jpg',
      'https://img1.picmix.com/output/pic/normal/5/9/6/7/4367695_0d207.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://c.tenor.com/yXbPF0fy_0kAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/JHnQC2Dfk7oAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/KGtY-otykjMAAAAM/serbian-srbija.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXiXkIA8AyCSjjHoYFejERs83hsCPCNtN7hoH_5sA4nNxxxtlv25c23GZPvDIkhZf6ok&usqp=CAU',
      'https://pozitivnemisli.com/download/2y8',
      'https://i.pinimg.com/originals/e4/7e/b0/e47eb0216dc1c400bd0b627a7007e846.gif',
      'https://i.ytimg.com/vi/MF7DbACUIuw/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1D2SyzqXpzOMpSpHFby0uvKKjy-eLzdg6QhdORwMz4c9gB4jM_3UyvtE55cthOeua0E&usqp=CAU',
      'https://www.magicus.info/container/images/r1/g2011/m04/x10730264037645893530.gif',
      'https://img1.picmix.com/output/pic/normal/3/8/7/0/6110783_ba207.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS69A72j4n2M-5iIzNnR0NboiMqzH3fV4-zsoI1TM9EN5RQ9R-fHIsrP5htgSnv66OfdY&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkeF50mvXjSvyU8Mi6cxqkzg9ZaDSZgjKCQ&usqp=CAU',
      'https://c.tenor.com/dWvd5IYtVGsAAAAM/dobro-jutro.gif',
      'https://img1.picmix.com/output/pic/normal/8/1/8/6/9886818_80470.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChkbbb1D6YsZT5ElNAZriOMXU2CDWotOdM2MQMFeuwpkPR1Gop0huC3jJlk1UpLZ2g7w&usqp=CAU',
     ];
     const response = random[Math.floor(Math.random() * random.length)];
     message.reply(response);
    }
});

bot.on('message', (message) => {
    if (message.content.startsWith('!kafa')) {
     const random = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFnePmJbO_OPyP3fyAROGCNqdPgOdjLYWjA&usqp=CAU',
      'https://lh3.googleusercontent.com/proxy/tKQ7YF6dzCY2nUjYGY4a9RKZZFmzey9zIOuAeGNmV6YEKQ7inBL2WU-IvKXLGt_zYk_nGRe5a0EOcNYMNlRUZQrcnTg-DWFJ=w1200-h630-pd',
      'https://i.pinimg.com/originals/f5/e3/42/f5e3424b6f6438a77802f62b5b07a3ff.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPukA36mRljQaMBqtHjoYGS5cw1XTKH67Kg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1OD44UAIL1CA8ddByM5ZapZQ2GXq4na-9Q&usqp=CAU',
      'https://cdn.discordapp.com/attachments/787300019882426370/919539993842696222/preuzmi.jpg',
      'https://cdn.discordapp.com/attachments/787300019882426370/919506507018690560/kafa_loncar.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0g7gy-sXE6EQHdIZoSdJ4CUqVuYTkC7kVA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl0w5JHA94jjLuuAVC6shuluBtfdSddIzpQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyq1nqubtiJFdGPfyRWMMGPvm8lAS_3pk9w&usqp=CAU',
      'https://i.pinimg.com/600x315/fb/f2/ac/fbf2acef99952fe7cbbebcee58ac8590.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WydDEM02N7XistynTj301Iuq2At7Iw-uIxaPaARdzq2vX8I8Nbz8Q_hmLWlbWhskSHg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI_55bfPec15HvNXHzSUQaImJHS4FuWhmyANk1rso39eHGVg5SJ5POK6uCWZEr3yVitA&usqp=CAU',
      'https://image.winudf.com/v2/image1/Y29tLm5ld2FuZHJvbW8uZGV2MjcwOTYuYXBwODYxMjIzX3NjcmVlbl8wXzE1OTY4MDE2MTZfMDU0/screen-0.jpg?fakeurl=1&type=.jpg',
      'https://i.pinimg.com/474x/62/18/30/6218304589c8cf9039f9bf4982efd8ae.jpg',
      'https://img1.picmix.com/output/pic/normal/5/9/6/7/4367695_0d207.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://c.tenor.com/yXbPF0fy_0kAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/JHnQC2Dfk7oAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/KGtY-otykjMAAAAM/serbian-srbija.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXiXkIA8AyCSjjHoYFejERs83hsCPCNtN7hoH_5sA4nNxxxtlv25c23GZPvDIkhZf6ok&usqp=CAU',
      'https://pozitivnemisli.com/download/2y8',
      'https://i.pinimg.com/originals/e4/7e/b0/e47eb0216dc1c400bd0b627a7007e846.gif',
      'https://i.ytimg.com/vi/MF7DbACUIuw/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1D2SyzqXpzOMpSpHFby0uvKKjy-eLzdg6QhdORwMz4c9gB4jM_3UyvtE55cthOeua0E&usqp=CAU',
      'https://www.magicus.info/container/images/r1/g2011/m04/x10730264037645893530.gif',
      'https://img1.picmix.com/output/pic/normal/3/8/7/0/6110783_ba207.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS69A72j4n2M-5iIzNnR0NboiMqzH3fV4-zsoI1TM9EN5RQ9R-fHIsrP5htgSnv66OfdY&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkeF50mvXjSvyU8Mi6cxqkzg9ZaDSZgjKCQ&usqp=CAU',
      'https://c.tenor.com/dWvd5IYtVGsAAAAM/dobro-jutro.gif',
      'https://img1.picmix.com/output/pic/normal/8/1/8/6/9886818_80470.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChkbbb1D6YsZT5ElNAZriOMXU2CDWotOdM2MQMFeuwpkPR1Gop0huC3jJlk1UpLZ2g7w&usqp=CAU',
     ];
     const response = random[Math.floor(Math.random() * random.length)];
     message.reply(response);
    }
});

bot.on('message', (message) => {
    if (message.content.startsWith('!cvece')) {
     const random = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFnePmJbO_OPyP3fyAROGCNqdPgOdjLYWjA&usqp=CAU',
      'https://lh3.googleusercontent.com/proxy/tKQ7YF6dzCY2nUjYGY4a9RKZZFmzey9zIOuAeGNmV6YEKQ7inBL2WU-IvKXLGt_zYk_nGRe5a0EOcNYMNlRUZQrcnTg-DWFJ=w1200-h630-pd',
      'https://i.pinimg.com/originals/f5/e3/42/f5e3424b6f6438a77802f62b5b07a3ff.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPukA36mRljQaMBqtHjoYGS5cw1XTKH67Kg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1OD44UAIL1CA8ddByM5ZapZQ2GXq4na-9Q&usqp=CAU',
      'https://cdn.discordapp.com/attachments/787300019882426370/919539993842696222/preuzmi.jpg',
      'https://cdn.discordapp.com/attachments/787300019882426370/919506507018690560/kafa_loncar.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0g7gy-sXE6EQHdIZoSdJ4CUqVuYTkC7kVA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl0w5JHA94jjLuuAVC6shuluBtfdSddIzpQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyq1nqubtiJFdGPfyRWMMGPvm8lAS_3pk9w&usqp=CAU',
      'https://i.pinimg.com/600x315/fb/f2/ac/fbf2acef99952fe7cbbebcee58ac8590.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WydDEM02N7XistynTj301Iuq2At7Iw-uIxaPaARdzq2vX8I8Nbz8Q_hmLWlbWhskSHg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI_55bfPec15HvNXHzSUQaImJHS4FuWhmyANk1rso39eHGVg5SJ5POK6uCWZEr3yVitA&usqp=CAU',
      'https://image.winudf.com/v2/image1/Y29tLm5ld2FuZHJvbW8uZGV2MjcwOTYuYXBwODYxMjIzX3NjcmVlbl8wXzE1OTY4MDE2MTZfMDU0/screen-0.jpg?fakeurl=1&type=.jpg',
      'https://i.pinimg.com/474x/62/18/30/6218304589c8cf9039f9bf4982efd8ae.jpg',
      'https://img1.picmix.com/output/pic/normal/5/9/6/7/4367695_0d207.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://c.tenor.com/yXbPF0fy_0kAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/JHnQC2Dfk7oAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/KGtY-otykjMAAAAM/serbian-srbija.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXiXkIA8AyCSjjHoYFejERs83hsCPCNtN7hoH_5sA4nNxxxtlv25c23GZPvDIkhZf6ok&usqp=CAU',
      'https://pozitivnemisli.com/download/2y8',
      'https://i.pinimg.com/originals/e4/7e/b0/e47eb0216dc1c400bd0b627a7007e846.gif',
      'https://i.ytimg.com/vi/MF7DbACUIuw/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1D2SyzqXpzOMpSpHFby0uvKKjy-eLzdg6QhdORwMz4c9gB4jM_3UyvtE55cthOeua0E&usqp=CAU',
      'https://www.magicus.info/container/images/r1/g2011/m04/x10730264037645893530.gif',
      'https://img1.picmix.com/output/pic/normal/3/8/7/0/6110783_ba207.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS69A72j4n2M-5iIzNnR0NboiMqzH3fV4-zsoI1TM9EN5RQ9R-fHIsrP5htgSnv66OfdY&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkeF50mvXjSvyU8Mi6cxqkzg9ZaDSZgjKCQ&usqp=CAU',
      'https://c.tenor.com/dWvd5IYtVGsAAAAM/dobro-jutro.gif',
      'https://img1.picmix.com/output/pic/normal/8/1/8/6/9886818_80470.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChkbbb1D6YsZT5ElNAZriOMXU2CDWotOdM2MQMFeuwpkPR1Gop0huC3jJlk1UpLZ2g7w&usqp=CAU',
     ];
     const response = random[Math.floor(Math.random() * random.length)];
     message.reply(response);
    }
});

bot.on('message', (message) => {
    if (message.content.startsWith('!dobro')) {
     const random = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFnePmJbO_OPyP3fyAROGCNqdPgOdjLYWjA&usqp=CAU',
      'https://lh3.googleusercontent.com/proxy/tKQ7YF6dzCY2nUjYGY4a9RKZZFmzey9zIOuAeGNmV6YEKQ7inBL2WU-IvKXLGt_zYk_nGRe5a0EOcNYMNlRUZQrcnTg-DWFJ=w1200-h630-pd',
      'https://i.pinimg.com/originals/f5/e3/42/f5e3424b6f6438a77802f62b5b07a3ff.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPukA36mRljQaMBqtHjoYGS5cw1XTKH67Kg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1OD44UAIL1CA8ddByM5ZapZQ2GXq4na-9Q&usqp=CAU',
      'https://cdn.discordapp.com/attachments/787300019882426370/919539993842696222/preuzmi.jpg',
      'https://cdn.discordapp.com/attachments/787300019882426370/919506507018690560/kafa_loncar.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0g7gy-sXE6EQHdIZoSdJ4CUqVuYTkC7kVA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl0w5JHA94jjLuuAVC6shuluBtfdSddIzpQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyq1nqubtiJFdGPfyRWMMGPvm8lAS_3pk9w&usqp=CAU',
      'https://i.pinimg.com/600x315/fb/f2/ac/fbf2acef99952fe7cbbebcee58ac8590.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WydDEM02N7XistynTj301Iuq2At7Iw-uIxaPaARdzq2vX8I8Nbz8Q_hmLWlbWhskSHg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI_55bfPec15HvNXHzSUQaImJHS4FuWhmyANk1rso39eHGVg5SJ5POK6uCWZEr3yVitA&usqp=CAU',
      'https://image.winudf.com/v2/image1/Y29tLm5ld2FuZHJvbW8uZGV2MjcwOTYuYXBwODYxMjIzX3NjcmVlbl8wXzE1OTY4MDE2MTZfMDU0/screen-0.jpg?fakeurl=1&type=.jpg',
      'https://i.pinimg.com/474x/62/18/30/6218304589c8cf9039f9bf4982efd8ae.jpg',
      'https://img1.picmix.com/output/pic/normal/5/9/6/7/4367695_0d207.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://c.tenor.com/yXbPF0fy_0kAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/JHnQC2Dfk7oAAAAM/dobro-jutro.gif',
      'https://c.tenor.com/KGtY-otykjMAAAAM/serbian-srbija.gif',
      'https://img1.picmix.com/output/pic/normal/5/3/3/1/5831335_d4449.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXiXkIA8AyCSjjHoYFejERs83hsCPCNtN7hoH_5sA4nNxxxtlv25c23GZPvDIkhZf6ok&usqp=CAU',
      'https://pozitivnemisli.com/download/2y8',
      'https://i.pinimg.com/originals/e4/7e/b0/e47eb0216dc1c400bd0b627a7007e846.gif',
      'https://i.ytimg.com/vi/MF7DbACUIuw/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1D2SyzqXpzOMpSpHFby0uvKKjy-eLzdg6QhdORwMz4c9gB4jM_3UyvtE55cthOeua0E&usqp=CAU',
      'https://www.magicus.info/container/images/r1/g2011/m04/x10730264037645893530.gif',
      'https://img1.picmix.com/output/pic/normal/3/8/7/0/6110783_ba207.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS69A72j4n2M-5iIzNnR0NboiMqzH3fV4-zsoI1TM9EN5RQ9R-fHIsrP5htgSnv66OfdY&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkeF50mvXjSvyU8Mi6cxqkzg9ZaDSZgjKCQ&usqp=CAU',
      'https://c.tenor.com/dWvd5IYtVGsAAAAM/dobro-jutro.gif',
      'https://img1.picmix.com/output/pic/normal/8/1/8/6/9886818_80470.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChkbbb1D6YsZT5ElNAZriOMXU2CDWotOdM2MQMFeuwpkPR1Gop0huC3jJlk1UpLZ2g7w&usqp=CAU',
     ];
     const response = random[Math.floor(Math.random() * random.length)];
     message.reply(response);
    }
});












































bot.on('ready', () =>{
    console.log('Bot je uspješno pokrenuo sve komande!');
})
