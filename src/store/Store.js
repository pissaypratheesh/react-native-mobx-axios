import createApi from '../services/api';
import AuthStore from './AuthStore';
import UiStore from './UiStore';

class Store {
	constructor(config) {
		this.config = config;

		this.uiStore = new UiStore(this);
		this.authStore = new AuthStore(this);

		this.api =  createApi({
			config: config.api
		});
	}
}

export default Store;
