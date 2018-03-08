
let baseUrl

switch(process.env.NODE_ENV) {
	case 'development':
		baseUrl = ''
		break
	default:
		baseUrl = ''
}

export {
	baseUrl
}















