import fs from 'fs'
import { TelegraPh } from "../../lib/lib.convert.js"

export default {
    name: 'tourl',
    aliases: ['telegra', 'uploadimage'],
    type: 'tool',
    desc: 'upload file to telegraph',
    execute: async({ hisoka, m, quoted }) => {
        let media = await hisoka.downloadMediaMessage(quoted)
        await fs.writeFileSync('shanndev.jpg', media)
        let image = await TelegraPh('shanndev.jpg')
        //console.log(image)
        hisoka.sendMessage(m.from, image, { caption: image, quoted: m })
        fs.unlinkSync('shanndev.jpg')
    },
    isMedia: {
        Image: true
    }
}