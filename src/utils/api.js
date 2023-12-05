import axios from "axios";
import user from "random-useragent";

function generateRandomString(length) {
	const values = "0123456789abcdef";
	const crypto = window.crypto || window.msCrypto;

	if (crypto && crypto.getRandomValues) {
		const bytes = new Uint8Array(length);
		crypto.getRandomValues(bytes);

		let randomString = "";
		for (let i = 0; i < bytes.length; i++) {
			randomString += values[bytes[i] % values.length];
		}

		return randomString;
	} else {
		throw new Error("Crypto API not supported in this browser.");
	}
}

const BASE_URL = "https://hanime.tv/api/v8/";

const headers = {
	"X-Signature-Version": "web2",
	"X-Signature": generateRandomString(64),
	"User-Agent": user.getRandom(),
};

export const fetchApi = async (url) => {
	try {
		const response = await axios.get(BASE_URL + url, { headers: headers });
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
