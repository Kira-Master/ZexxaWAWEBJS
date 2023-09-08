import axios from 'axios'
export default {
    name: 'pinterest2',
    aliases: ['pin2', 'pinimg2'],
    type: 'search',
    desc: 'search pinterest image server 2',
    example: 'no query?!\n\n*Example*: %prefix%command light yagami aesthetic',
    execute: async({m, hisoka, message}) => {
        try {
            let xv = m.text
            let {data} = await axios.get(`https://api.anna.biz.id/api/search/pinterest?query=${xv}`)
            if ( data.status !== 200) {
                m.reply('data tidak ada')
                } else {
                    hisoka.sendMessage(m.from, data.result.url, { caption: xv, quoted: m })
                    }
            }catch(error){
                m.reply(error)
                }
        
        }
    }