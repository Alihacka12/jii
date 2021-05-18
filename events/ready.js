const chalk = require('chalk')
const moment = require('moment')
const ayarlar = require("../ihtiyaR.json")
const figlet = require('figlet');
const kanal = ''
module.exports = client => {

  let tarih = moment().format('');
      console.log(chalk.grey(figlet.textSync("ihtiyaR")));
    console.log(chalk`                         {bgBlue Version:} {red ^12.5.1}`)
    console.log("\n" + chalk.green(`=> ${tarih} Tarihinde Token Listesi Yüklendi. `) + chalk.yellow(`\n=> OwO Paracıkları Dağıtılmaya Başladı.`) )
  client.user.setStatus("dnd");
  client.user.setActivity(`1-10 Kullanıcıları`, { type: "WATCHING" });

};
