import axios from 'axios'

export default {
    name: 'sfile',
    type: 'search',
    desc: 'search file from sfile.mobi',
    example: 'no query?!\n\n*Example*: %prefix%command opok telkomsel',
    execute: async({ hisoka, m, message }) => {
        let txt = m.text
        let req = await axios.get(`https://api.akuari.my.id/search/sfilesearch?query=${txt}`)
        //console.log(req)
        if (req.status !== 200) return m.reply('api error')
        let msgX = ''
        for ( let i of req.data.result )
        {
        msgX += `${i.nama}\n`
        msgX += `${i.size}\n`
        msgX += `${i.link}\n\n`
        
        }
        hisoka.sendMessage(m.from, msgX)
        }
        }
    
