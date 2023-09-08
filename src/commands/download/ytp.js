import axios from 'axios'

export default {
    name: 'play',
    aliases: ['ytplay'],
    type: 'download',
    desc: 'play music by query',
    example: 'No query?!\n\nExample : %prefix%command hbrp - tokyo milk',
    execute: async({ hisoka, m, message }) => {
        m.reply('please wait, 2 minutes..')
        let url = m.text
        let { data } = await axios.get(`https://api.akuari.my.id/downloader/play2?query=${url}`)
        //console.log(data)
        if (data?.err) return m.reply("error")
        //for (let result of request.data.urldl_audio) {

            hisoka.sendMessage(m.from, data.urldl_audio.link, { asDocument: true, fileName: data.info.title, mimetype: 'audio/mp4', caption: `*Title*: *${data.info.title}*\n*Channel*: *${data.info.channel}*\n*Views*: *${data.info.views}*`, quoted: message }).catch(() => { return m.reply('gagal mengirim audio')})

        //}

    },

    isLimit: true

}