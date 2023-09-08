import axios from 'axios'

export default {
    name: 'ytmp3',
    aliases: ["ytaudio","yta"],
    type: 'download',
    desc: 'download audio from youtube',
    example: 'No url?!\n\nExample : %prefix%command https://youtu.be/Fv6oCEPj3Qg?si=Vqw-HegGkF_96T4-',
    execute: async({ hisoka, m, message }) => {
        m.reply('please wait 2 minutes.... ')
        let url = Func.isUrl(m.body)[0]
        let { data } = await axios.get(`https://api.akuari.my.id/downloader/yt1?link=${url}`)
        if (data?.err) return m.reply("error")
        //for (let result of request.data.urldl_audio) {

            hisoka.sendMessage(m.from, data.urldl_audio.link, { asDocument: true, fileName: data.info.title, mimetype: 'audio/mp4', caption: `*Title*: *${data.info.title}*\n*Channel*: *${data.info.channel}*\n*Views*: *${data.info.views}*`, quoted: message }).catch(() => { return m.reply('gagal mengirim audio')})

        //}

    },

    isLimit: true

}