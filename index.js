const Chariot = require('chariot.js');

class ChariotTemplate extends Chariot.Client {
  constructor() {
      super(new Chariot.Config(
          process.env.BTOKEN, 
          {
              prefix: ['!ct', '@mention'],
              guildPrefixes: [
                  { guildID: '738529182870667355', prefix: '?' },
              ],
              defaultHelpCommand: true,
              primaryColor: 'ORANGE',
              owner: [
                  '429375712554647553',
              ],
              excludeDirectories: [
                  'top_secret'
              ]
          },
          {
              messageLimit: 50,
              defaultImageFormat: 'png'
          }
      ));
  }  
}

module.exports = new ChariotTemplate();