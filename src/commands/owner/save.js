export default {
    name: 'saveme',
    execute: async({m, hisoka}) => {
        try {
            hisoka.saveContact(m.from)
            } catch(error) {
                console.error(error)
                m.reply(error)
                }
        },
    isOwner: true
    }
