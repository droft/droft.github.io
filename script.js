
async function fetcher(URL_ID) {
	const fetchResult = fetch('https://api-ssl.bitly.com/v4/expand', {
    method: 'POST',
    headers: {
        'Authorization': 'e0f65d8e2adb0d47a958af203cbb582896954a39',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "bitlink_id": "bit.ly/"+ URL_ID })
});
	const response = await fetchResult;
	const result = await response.json();
	return result
}


function drive_link_parse(L_url) {
	let L_url_split = L_url.split("/")
	console.log(L_url_split[5])

	window.location.replace('https://drive.google.com/uc?export=download&id='+L_url_split[5]);

}






let c = window.location.href;
let c_split = c.split("?")
let extracted_id = c_split[1];

console.log(extracted_id)

fetcher(extracted_id).then(data => {
	console.log(data.long_url)
	drive_link_parse(data.long_url)
})



