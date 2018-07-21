import LocationApi from "./location_api";
import Dom from "./dom";

const loc = new LocationApi();
const dom = new Dom();
const btn = document.getElementById("get");

btn.addEventListener("click", () => {
	dom.showPreloader();
	loc.getMyIp()
 		.then(res => loc.getMyLocation(res.ip))
 		.then(res => dom.setCoordinates(res))
 		.then(res => dom.hidePreloader());
});