export default class LocationApi {
	getMyIp () {
		return fetch("https://api.ipify.org?format=json")
		.then(res => {
			if(res.status === 200){
				return res.json();
			}

			return Promise.reject(res.status);
		})
	}

	getMyLocation(my_ip){
		return fetch(`https://freegeoip.net/json/${my_ip}`)
		.then(res => {
			if(res.status === 200){
				return res.json();
			}

			return Promise.reject(res.status);
		})
	}
}
