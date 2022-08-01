const loadExternalScript = url => {
	if (typeof document !== `undefined`) {
		const script = document.createElement('script')
		script.src = url
		script.async = true
		document.body.appendChild(script)
	}
}

export default loadExternalScript
