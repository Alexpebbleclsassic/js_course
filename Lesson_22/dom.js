export default class Dom {
	constructor(){
		this.preloader = document.getElementsByClassName("preloader");
		this.locationBlock =  document.getElementById("location_block")

		this.country = document.getElementById("country");
		this.region = document.getElementById("region");
		this.city = document.getElementById("city");
		this.latitude = document.getElementById("latitude");
		this.longitude = document.getElementById("longitude");
	}

	showPreloader() {
		setTimeout(() => {
			for (let i = 0; i < this.preloader.length; i += 1){
				this.preloader[i].classList.remove("done");
			}
		}, 500);
	}

	hidePreloader() {
		setTimeout(() => {
			for (let i = 0; i < this.preloader.length; i += 1){
				this.preloader[i].classList.add("done");
			}
		}, 500);
	}

	setCoordinates(coordinates) {
		this.country.innerHTML = coordinates.country_name;
		this.region.innerHTML = coordinates.region_name;
		this.city.innerHTML = coordinates.city;
		this.latitude.innerHTML = coordinates.latitude;
		this.longitude.innerHTML = coordinates.longitude;

		this.locationBlock.classList.remove("done");
	}
}