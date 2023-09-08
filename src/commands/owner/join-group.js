export default {
    name: 'join',
    aliases: ['joingc'],
    type: 'owner',
    execute: async({m, hisoka}) => {
        try {
    hisoka.acceptInvite(Func.isUrl(m.body)[0].replace('https://chat.whatsapp.com/', ''))
            }catch(error){
                m.reply(error)
                }
       
        },
    isOwner: true
    }