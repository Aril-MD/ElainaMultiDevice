import fetch from 'node-fetch'
import { pickRandom } from '../lib/other-function.js'
let handler = async (m, { conn, command }) => {
let link = [
'https://c5.coomer.party/data/5b/0c/5b0cc243ea8be583a2a1ad7f1e373fea617f17efc7ea6a4c6efdf4c834ee7f7d.jpg?f=b2792f71-0a7a-425f-87dc-a245480f899d.jpg',
'https://img.coomer.party/thumbnail/data/9a/2e/9a2e66ebfbae1e9b3a01dee736cf882ca00ab56bf03a46d88c5cabd88f593c1b.jpg',
'https://img.coomer.party/thumbnail/data/5a/47/5a47a74c26587dc081db456a00eb8a96f8ca25d494dc07885d37d65155fe3c69.jpg',
'https://img.coomer.party/thumbnail/data/73/fb/73fb805d49f9bc74b0ee3d77628d90ce23bbbcf576a0a5e38a6c48cddd6d753f.jpg',
'https://img.coomer.party/thumbnail/data/d7/28/d728d572be5f34f86b95676a4ecb888ebacb60872ca292fa9ef60affacfa13ce.jpg',
'https://img.coomer.party/thumbnail/data/19/32/1932fb83ce7f6711201c5d7a27c65f8593c2592dd315df201dc7e975f5af551f.jpg',
'https://img.coomer.party/thumbnail/data/51/8c/518c30a8c326522bcd9f87d0ef42c18ed88f5fde446317091aa95db872b4f0c2.jpg',
'https://img.coomer.party/thumbnail/data/61/44/6144d9498c9747c46423e2811380b94112a3acbefaf67643a2cdf21f7ba10936.jpg',
'https://img.coomer.party/thumbnail/data/a3/59/a359212305cd2454cd3b0a38b22741bea44a0ea69bec450add08090d791aa757.jpg',
'https://img.coomer.party/thumbnail/data/b3/72/b3726055feaa898661bde2e0e9e279ae94391e945fac6be5d54d519507c0907a.jpg',
'https://img.coomer.party/thumbnail/data/26/d8/26d8d67d60cc67119253acbafe7c6b10c44cbba29f143bc4c41f7b635a467713.jpg',
'https://img.coomer.party/thumbnail/data/68/d9/68d9712591737ec34f465ebe84578d52273e0969030d913295e144cd97ca776f.jpg'
]
let poto = pickRandom(link)
conn.sendFile(m.chat, poto, 'wikwik.mp4', '_Jangan Coli Ya..._', m)
} 
handler.help = handler.command = ['potato']
handler.tags = ['random']
export default handler