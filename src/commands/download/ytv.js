import axios from 'axios'

export default {
    name: 'ytmp4',
    aliases: ['ytv', 'ytvideo'],
    type: 'download',
    desc: 'download video from youtube',
    example: 'No url?!\n\nExample : %prefix%command https://youtu.be/Fv6oCEPj3Qg?si=Vqw-HegGkF_96T4-',
    execute: async({ hisoka, m, message }) => {
        m.reply('wait..')
        let url = Func.isUrl(m.body)[0]
        let { data } = await axios.get(`https://api.akuari.my.id/downloader/yt1?link=${url}`)
        if (data?.err) return m.reply("error")
        //for (let result of request.data.urldl_audio) {

            hisoka.sendMessage(m.from, data.urldl_video.link, { caption: `*downloaded from ${url}*`, quoted: message}).catch(() => { return m.reply('gagal mengirim video')})

        //}

    },

    isLimit: true

}