import axios from 'axios'
export default {
    name: "ytsearch",
    aliases: ['yts'],
    type: 'search',
    desc: "search video from youtube",
    example: 'No query?!\n\nExample : %prefix%command hbrp tokyo milk',
    execute: async({ hisoka, m, message }) => {
        let txt = m.text
        let req = await axios.get(`https://api.akuari.my.id/search/youtube?query=${txt}`)
        let msgX = ''
        for ( let i of req.data.hasil ) {
            msgX += `*URL*: ${i.url}\n*ID*: ${i.videoId}\n*Title*: ${i.title}\n*Views*: ${i.views}\n*Duration*: ${i.timestamp}\n*Since*: ${i.ago}\n*Description*: ${i.description}\n\n\n`
            
            }
        hisoka.sendMessage(m.from, req.data.hasil[0].thumbnail, { caption: msgX, quoted: m})
    },
}
    
                                                           
   