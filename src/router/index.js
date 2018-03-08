import App from '../App'

let editor = r => require.ensure([], () => r(require('../pages/editor/editor')), 'editor')


export default [{
    path: '/',
    component: App,
    redirect: '/editor',
    children: [{
	    path: '/editor',
	    component: editor,
    }]
}]












