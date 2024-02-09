import fs from "fs";
import cp, { exec as _exec } from "child_process";
import { promisify } from "util";
let exec = promisify(_exec).bind(cp);

let handler = async (m, { conn, isROwner }) => {
   try {
      let zipFileName = `Aril-main.zip`;

      m.reply("Sedang memulai proses backup. Harap tunggu...");

      setTimeout(() => {
         if (fs.existsSync("node_modules")) {
            m.reply("Modul 'node_modules' tidak ikut di backup.");
         }

         const file = fs.readFileSync(zipFileName);
         conn.sendMessage(
            m.chat,
            {
               document: file,
               mimetype: "application/zip",
               fileName: zipFileName,
               caption: "Backup selesai. Silakan unduh file backup.",
            },
            { quoted: m }
         );

         setTimeout(() => {
            fs.unlinkSync(zipFileName);
            m.reply("File backup telah dihapus.");
         }, 5000);
      }, 3000);

      setTimeout(() => {
         let zipCommand = `zip -r ${zipFileName} * -x "node_modules/*"`;
         exec(zipCommand, (err, stdout) => {
         });
      }, 1000);
   } catch (error) {
      m.reply("Terjadi kesalahan saat melakukan backup.");
      console.error(error);
   }
};

handler.help = ["backupsc"];
handler.tags = ["owner"];
handler.command = ["backupsc"];
handler.rowner = true;

export default handler