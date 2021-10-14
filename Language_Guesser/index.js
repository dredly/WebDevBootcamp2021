import { franc } from 'franc'
import 'colors'
import langs from 'langs'

const sentence = process.argv[2];
const langCode = franc(sentence);
const language = langs.where("3", langCode)
if (language) console.log(language.name.green);
else console.log('Could not detect language, please try with a larger sample'.red);

