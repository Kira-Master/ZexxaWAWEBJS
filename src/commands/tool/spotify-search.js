import { search, download } from "../../lib/spotify.js"
export default { 
    name: 'spotify',
    aliases: ['spotisearch'],
    type: 'search',
    desc: 'search music from spotify',
    example: 'no query?!\n\nExample: %prefix%command when i was your man',
    execute: async({ m, hisoka }) => {
        let xx = m.text
        let data = await search(xx)
        console.log(data)
        let msgX = ''
        for ( let i of data.result ) {
            i.artist = i.artist[0].name
            msgX += `*Title*: ${i.judul}\n*Artist*: ${i.artist}\n*Album*: ${i.album}\n*Release Date*: ${i.release_date}\n*Popularity*: ${i.popularity}\n*Track*: ${i.track}\n\n`
            }
        hisoka.sendMessage(m.from, msgX)
        },
    isOwner: false
    }