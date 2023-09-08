import axios from 'axios'
export default {
    name: 'txt2img',
    type: 'ai',
    desc: 'text to image anime',
    example: '%prefix%command 1girl,blue+hair,with+mask+dark+skin,highly+detailed,no+blur,devil',
    execute: async({m, hisoka}) => {
        m.reply('wait a sec...')
        try {
            let txt = m.text
            let req = await axios.get(`https://zeltoria.site/api/others/diffusion?q=${txt}`)
            if (req.status !==200) {
                m.reply('website error')
                } else {
                    hisoka.sendMessage(m.from, `https://zeltoria.site/api/others/diffusion?q=${txt}`, {
                        caption: `*success generated by query ${txt}*`, quoted: m
                        })
                    }
            }catch(error){
                console.error(error)
                m.reply('error, report to owner')
                }
        }
    }