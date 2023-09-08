import axios from 'axios'

export default {

    name: "lirik",

    aliases: ["carilirik", "liriklagu"],

    type: "search",

    desc: "Get lirik from music match",
    example: "what lyric?!\n\n*Example*: %prefix%command before you go",

    execute: async({ hisoka, m, message }) => {
        let te = m.text
        let { data } = await axios.get(`https://api.akuari.my.id/search/lirik?query=${te}`)
        for ( let i of data.result ) {
        hisoka.sendMessage(m.from, i.lirik)
            }
        }
    }