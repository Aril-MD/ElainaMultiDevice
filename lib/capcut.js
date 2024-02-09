import cheerio from "cheerio";
import axios from "axios";
//capcut new
async function capcut(url) {
  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);

  return {
    nama: $("img").attr("alt"),
    used: $("b").text().replace($("img").attr("alt"), ""),
    thumbnail: $("img").attr("src"),
    video: $("video").attr("src"),
  };
}

//capcut new
function capcutdl(Url) {
	return new Promise((resolve, reject) => {
		let token = Url.match(/\d+/)[0];
		axios({
			url: `https://ssscapcut.com/api/download/${token}`,
			method: 'GET',
			headers: {
				'Accept': '/',
				'User-Agent': 'Mozilla/5.0 (Linux; Android 13; CPH2217 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile Safari/537.36',
				'X-Requested-With': 'acr.browser.barebones',
				'Sec-Fetch-Site': 'same-origin',
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Dest': 'empty',
				'Referer': 'https://ssscapcut.com/',
				'Accept-Encoding': 'gzip, deflate',
				'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
				'Cookie': 'sign=2cbe441f7f5f4bdb8e99907172f65a42; device-time=1685437999515'
			}
		}).then(({ data }) => {
			console.log(data);
			resolve(data); // Menyelesaikan janji dengan mengembalikan data
		}).catch((err) => {
			console.log(err);
			reject(err); // Menyelesaikan janji dengan melempar kesalahan
		});
	});
      }

export { capcut, capcutdl }