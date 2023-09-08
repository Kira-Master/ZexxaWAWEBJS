import axios from 'axios'
export default {
    name: 'stickerpack',
    type: 'search',
    desc: 'search sticker from stickerpack',
    example: 'query?!\n\nExample: %prefix%command gojo satoru',
    execute: async({ m, hisoka }) => {
        try {
            let txt = m.text
            let { data } = await axios.get(`https://api.anna.biz.id/api/search/sticker?text=${txt}`)
            if (data.status !== 200) {
                m.reply('not found')
                } else {
                    hisoka.sendMessage(m.from, data.result.url, { asSticker: true, packName: 'zexxa', packPublish: 'KIRA', quoted: m })
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }