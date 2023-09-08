import axios from 'axios'
import fs from 'fs'
import { TelegraPh } from "../../lib/lib.convert.js"
/*function TelegraPh(buffer) {

    return new Promise(async (resolve, reject) => {

        if (!fs.existsSync(buffer)) return reject(new Error("File not Found"))

        try {

            const form = new BodyForm();

            form.append("file", fs.createReadStream(buffer))

            const data = await axios({

                url: "https://telegra.ph/upload",

                method: "POST",

                headers: {

                    ...form.getHeaders()

                },

                data: form

            })

            return resolve("https://telegra.ph" + data.data[0].src)

        } catch (err) {

            return reject(new Error(String(err)))

        }

    })

}*/

/*function removeBG(buffer) {
    return new Promise(async (resolve, reject) => {
        let file = await Func.getFile(buffer)
        const { data } = await axios.post(`https://bgremover.zyro.com/v1/ai/background-remover`, { "image_data": `data:image/jpeg;base64,${file.data.toString("base64")}` })
        resolve(Buffer.from(data.result.split`,`[1], "base64"))
    })
}*/

export default {
    name: 'removebg',
    aliases: ['rembg', 'nobg'],
    type: 'tool',
    desc: 'remove background image',
    execute: async({ hisoka, m, quoted }) => {
        let media = await hisoka.downloadMediaMessage(quoted)
        await fs.writeFileSync('shanndev.jpg', media)
        let image = await TelegraPh('shanndev.jpg')
        //console.log(image)
        hisoka.sendMessage(m.from, `https://xzn.wtf/api/removebg?url=${image}&apikey=zexxabot`, { asDocument: true, type: 'image', filename: 'removebg.png', caption: '*done by zexxa*', quoted: m })
    },
    isMedia: {
        Image: true
    }
}



