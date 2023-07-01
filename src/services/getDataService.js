import http from './httpService';

export function getData() {
	return http.get('/api/v1/getMessage');
}
