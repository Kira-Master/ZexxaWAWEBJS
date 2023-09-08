import { pinterest } from '@bochilteam/scraper'
import axios from 'axios'

export default {
    name: 'pinterest',
    aliases: ['pin', 'pinimg'],
    type: 'search',
    desc: 'search image from pinterest',
    example: 'no query?!\n\n*Example*: %prefix%command light yagami icon',
    execute: async({ hisoka, m, message }) => {
        m.reply('wait..')
        let txt = m.text
        let data = await pinterest(txt)
        
        console.log(data)
        //for ( let i of data.result ) {
       let result = data[Math.floor(Math.random() * data.length)]
        hisoka.sendMessage(m.from, result, { caption: m.text, quoted: message })
            //}
        }
    }