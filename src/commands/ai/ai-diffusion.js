import axios from 'axios'

export default {
    name: 'aidiffusion',
    aliases: ['aiimage', 'generateimage', 'aidiff'],
    type: 'ai',
    desc: 'generate image by ai',
    example: 'No Query?!\n\nExample : %prefix%command girl+crying+at+night,blue+hair,wavy+hair, hair+short,+anime,japan+style',
    execute: async({ hisoka, m }) => {
            let url = m.text
            let img = `https://api.xyroinee.xyz/api/ai/animediffusion?q=${url}&apikey=HSe67DVntT`
            hisoka.sendMessage(m.from, img, { caption: `success generate image by query: ${url}`})
            }
            }