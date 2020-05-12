import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Mauricio',
		lastName: 'Llumiquinga'
	}
});

export default app;