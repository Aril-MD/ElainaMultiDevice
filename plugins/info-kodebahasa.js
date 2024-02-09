const languages = `
af          Afrikaans
ak          Akan
sq          Albanian
am          Amharic
ar          Arabic
hy          Armenian
az          Azerbaijani
eu          Basque
be          Belarusian
bem         Bemba
bn          Bengali
bh          Bihari
xx-bork     Bork, bork, bork!
bs          Bosnian
br          Breton
bg          Bulgarian
km          Cambodian
ca          Catalan
chr         Cherokee
ny          Chichewa
zh-CN       Chinese (Simplified)
zh-TW       Chinese (Traditional)
co          Corsican
hr          Croatian
cs          Czech
da          Danish
nl          Dutch
xx-elmer    Elmer Fudd
en          English
eo          Esperanto
et          Estonian
ee          Ewe
fo          Faroese
tl          Filipino
fi          Finnish
fr          French
fy          Frisian
gaa         Ga
gl          Galician
ka          Georgian
de          German
el          Greek
gn          Guarani
gu          Gujarati
xx-hacker   Hacker
ht          Haitian Creole
ha          Hausa
haw         Hawaiian
iw          Hebrew
hi          Hindi
hu          Hungarian
is          Icelandic
ig          Igbo
id          Indonesian
ia          Interlingua
ga          Irish
it          Italian
ja          Japanese
jw          Javanese
kn          Kannada
kk          Kazakh
rw          Kinyarwanda
rn          Kirundi
xx-klingon  Klingon
kg          Kongo
ko          Korean
kri         Krio (Sierra Leone)
ku          Kurdish
ckb         Kurdish (Soranî)
ky          Kyrgyz
lo          Laothian
la          Latin
lv          Latvian
ln          Lingala
lt          Lithuanian
loz         Lozi
lg          Luganda
ach         Luo
mk          Macedonian
mg          Malagasy
ms          Malay
ml          Malayalam
mt          Maltese
mi          Maori
mr          Marathi
mfe         Mauritian Creole
mo          Moldavian
mn          Mongolian
sr-ME       Montenegrin
ne          Nepali
pcm         Nigerian Pidgin
nso         Northern Sotho
no          Norwegian
nn          Norwegian (Nynorsk)
oc          Occitan
or          Oriya
om          Oromo
ps          Pashto
fa          Persian
xx-pirate   Pirate
pl          Polish
pt-BR       Portuguese (Brazil)
pt-PT       Portuguese (Portugal)
pa          Punjabi
qu          Quechua
ro          Romanian
rm          Romansh
nyn         Runyakitara
ru          Russian
gd          Scots Gaelic
sr          Serbian
sh          Serbo-Croatian
st          Sesotho
tn          Setswana
crs         Seychellois Creole
sn          Shona
sd          Sindhi
si          Sinhalese
sk          Slovak
sl          Slovenian
so          Somali
es          Spanish
es-419      Spanish (Latin American)
su          Sundanese
sw          Swahili
sv          Swedish
tg          Tajik
ta          Tamil
tt          Tatar
te          Telugu
th          Thai
ti          Tigrinya
to          Tonga
lua         Tshiluba
tum         Tumbuka
tr          Turkish
tk          Turkmen
tw          Twi
ug          Uighur
uk          Ukrainian
ur          Urdu
uz          Uzbek
vi          Vietnamese
cy          Welsh
wo          Wolof
xh          Xhosa
yi          Yiddish
yo          Yoruba
zu          Zulu
`

let handler = async (m) => {
  await m.reply(languages);
      // Jeda agar pesan terlihat berurutan
  await new Promise(resolve => setTimeout(resolve, 2500));
  await m.reply('Kode Bahasa Ini Digunakan untuk melihat translate dari bahasa apa ke bahasa apa, dengan perintah .tr id|en Aku suka kamu, artinya Aku suka kamu akan diubah ke bahasa inggris')
};

handler.tags = ['kodebahasa'];
handler.command = /^(kodebahasa|kodebhs)$/i;

export default handler;
