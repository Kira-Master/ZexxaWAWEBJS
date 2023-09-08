import fs from 'fs'
import axios from 'axios'
export default {
    name: 'dinokuning',
    type: 'convert',
    desc: 'yellow dino',
    execute: async({m,hisoka}) => {
        try {
            let data = await fs.readFileSync('./src/lib/dinokuning.json', 'utf8')
            //console.log(data)
            //let x = data.hasil
            //console.log()
            //let res = data
            //console.log(res)
            let result = data[Math.floor(Math.random() * data.length)]
            
            console.log(result)
            //hisoka.sendMessage(m.from, res, { asSticker: true, quoted: m })
            }catch(error){
                m.reply(error)
                }
        }
    }