import axios from 'axios'

export default {
    name: 'mediafire',
    aliases: ['mediafiredl'],
    type: 'download',
    desc: 'download from mediafire',
    example: 'No url?!\n\nExample : %prefix%command https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file',
    execute: async({ hisoka, m, message }) => {
        m.reply('wait..')
        let url = Func.isUrl(m.body)[0]
        let { data } = await axios.get(`https://api.akuari.my.id/downloader/mediafireDl?link=${url}`)
        //if (data.code !== 200) return m.reply('api error')
        let capt = `*Title*: *${data.hasil.title}*\n*Size*: ${data.hasil.size}`
        hisoka.sendMessage(m.from, data.hasil.link, { mimetype: 'auto', caption: capt, asDocument: true, fileName: data.hasil.title}).catch(() => { return m.reply('error saat mengirim file')})
        }
        }
        