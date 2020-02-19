import axios from 'axios';

const api = axios.create({
	params: {},
});

export const menu = {
	getToday: () => api.get('get_today/'),
	getMain: () =>
		api.get('get_week/', {
			params: {
				dorm: 'main',
			},
		}),
	getYangSung: () =>
		api.get('get_week/', {
			params: {
				dorm: 'yangsung',
			},
		}),
	getYangJin: () =>
		api.get('get_week/', {
			params: {
				dorm: 'yangjin',
			},
		}),
};

export const notice = {
	getNotice: () => api.get('get_notice/'),
};
