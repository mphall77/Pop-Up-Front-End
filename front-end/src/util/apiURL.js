export const apiURL = () => {
	return window.location.hostname === "localhost"
		? "http://localhost:3333"
		: "https://pop-up-shop-back-end.herokuapp.com";
};
