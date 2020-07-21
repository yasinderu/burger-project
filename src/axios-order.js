import axios from "axios";

const instance = axios.create({
	baseURL: "https://reactburger-e4f44.firebaseio.com/",
});

export default instance;
