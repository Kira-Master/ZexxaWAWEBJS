import { fileURLToPath } from "url"
import fs from "fs"

// limit
const limit = {
   free: 25,
   premium: 250,
   VIP: "Infinity",
   download: {
      free: 30000000, // use byte
      premium: 100000000, // use byte
      VIP: 1130000000, // use byte 
   }
}


export default {
   limit,
   APIs: {
      zxb: {
          URI: 'https://api.akuari.my.id'
          },
      xzn: {
         URI: 'https://xzn.wtf',
         Key: "zexxabot"
      }
   },

   msg: {
      owner: 'Perintah ini hanya dapat digunakan oleh Owner!',
      group: 'Perintah ini hanya dapat digunakan di group!',
      private: 'Perintah ini hanya dapat digunakan di private chat!',
      admin: 'Perintah ini hanya dapat digunakan oleh admin group!',
      botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut',
      bot: 'Fitur ini hanya dapat diakses oleh Bot',
      locked: 'Fitur ini telah dinonaktifkan!',
      media: 'Reply media...',
      error: "Sepertinya ada kesalahan. bot gagal dalam mengeksekusi...",
      quoted: "Reply message...",
      wait: "",
      premium: "Perintah ini hanya dapat digunakan oleh pengguna premium!",
      vip: "Perintah ini hanya dapat digunakan oleh pengguna VIP!",
      dlFree: `File over ${formatSize(limit.download.free)} can only be accessed by premium users`,
      dlPremium: `WhatsApp Web cannot send files larger than ${formatSize(limit.download.premium)}`,
      dlVIP: `WhatsApp cannot send files larger than ${formatSize(limit.download.VIP)}`
   },

   options: {
      public: true,
      URI: 'mongodb+srv://zexxadev:rhpulVsiwQu95nhV@cluster0.prfpwmz.mongodb.net/?retryWrites=true&w=majority',
      owner: ["6282135278036"],
      pathCommand: 'commands'
   },

   Exif: {
      packId: "https://instagram.com/paujikerenbanget",
      packName: `Sticker ini Dibuat Oleh :`,
      packPublish: "ZexxaBot.",
      packEmail: "dev@zexxa.tech",
      packWebsite: "https://zexxa.tech",
      androidApp: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact",
      iOSApp: "https://api.whatsapp.com/send?phone=+6285712249005",
      categories: ['😹', '😎', '😱'],
      isAvatar: 0
   },

   session: {
      Path: "session",
      Name: "zexxa"
   }
}

function formatSize(bytes) {
   if (bytes >= 1000000024) { bytes = (bytes / 1000000024).toFixed(2) + " GB"; }
   else if (bytes >= 1000024) { bytes = (bytes / 1000024).toFixed(2) + " MB"; }
   else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
   else if (bytes > 1) { bytes = bytes + " bytes"; }
   else if (bytes == 1) { bytes = bytes + " byte"; }
   else { bytes = "0 bytes"; }
   return bytes;
}

let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})
