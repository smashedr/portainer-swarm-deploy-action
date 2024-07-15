const core = require('@actions/core')
// const github = require('@actions/github')
const Portainer = require('./portainer')

;(async () => {
    try {
        const url = core.getInput('url', { required: true })
        console.log('url:', url)
        const token = core.getInput('token', { required: true })
        console.log('token:', token)

        const portainer = new Portainer(url, token)

        const stacks = await portainer.getStacks()
        console.log('Stacks:', stacks)

        console.log('+++ SUCCESS ++++')
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
