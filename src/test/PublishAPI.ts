var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();

export async function sendMedia(){

data.append('hashtags', '[]');
data.append('author', '{"name":"TT","email":""}');
data.append('type', 'audio');
data.append('media', fs.createReadStream('src\\testdata\\85c91875-d532-43fa-bd32-a299ce86a3db.weba'));

var config = {
  method: 'post',
  url: 'https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish',
  headers: { 
    'authority': 'dev.api.fankave.com', 
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"', 
    'accept': 'application/json, text/plain, */*', 
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36', 
    'sec-ch-ua-platform': '"Windows"', 
    'origin': 'https://dev.ccapps.fankave.com', 
    'sec-fetch-site': 'same-site', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://dev.ccapps.fankave.com/', 
    'accept-language': 'en-US,en;q=0.9', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}
