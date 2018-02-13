import $router from 'wee-routes';
import './bootstrap';

$router.map([
	{
		path: '/',
		init() {
			console.log('hello world');
		}
	}
]).run();