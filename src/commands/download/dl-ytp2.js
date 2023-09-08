import axios from 'axios'
export default {
    name: 'play2',
    aliases: ['ytp2', 'playmp32'],
    type: 'download',
    desc: 'play music server 2',
    example: '%prefix%command crank that',
    execute: async({m,hisoka}) => {
        try {
            let q = m.text
            let { data } = await axios.get(`https://api.zahwazein.xyz/downloader/ytplay?apikey=zenzkey_8bc01f5847&query=${q}`)
            if (data.status !== 'OK') {
                return m.reply('not found')
                }else{
                  return m.reply('wait...')
                    hisoka.sendMessage(m.from, data.result.getAudio.url, { asDocument: true, fileName: data.result.title, mimeType: 'audio/m4a', quoted: m })
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }
            