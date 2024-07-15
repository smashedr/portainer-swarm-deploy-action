const core = require('@actions/core')
const github = require('@actions/github')
const Portainer = require('./portainer')

;(async () => {
    try {
        // console.log('github.context:', github.context)
        const { owner, repo } = github.context.repo
        console.log('owner:', owner)
        console.log('repo:', repo)
        const repositoryURL = `https://github.com/${owner}/${repo}`
        console.log('repositoryURL:', repositoryURL)

        const url = core.getInput('url', { required: true })
        console.log('url:', url)
        const token = core.getInput('token', { required: true })
        console.log('token:', token)
        let endpoint = core.getInput('endpoint')
        console.log('endpoint:', endpoint)
        const name = core.getInput('name', { required: true })
        console.log('name:', name)
        const file = core.getInput('file', { required: true })
        console.log('file:', file)

        const portainer = new Portainer(url, token)

        if (!endpoint) {
            const endpoints = await portainer.getEndpoints()
            // console.log('endpoints:', endpoints)
            endpoint = endpoints[0].Id
            console.log('endpoint:', endpoint)
        }

        const swarm = await portainer.getSwarm(endpoint)
        // console.log('swarm:', swarm)
        const swarmID = swarm.ID
        console.log('swarmID:', swarmID)

        const stacks = await portainer.getStacks()
        // console.log('stacks:', stacks)
        console.log('stacks.length:', stacks.length)
        let stack = stacks.find((item) => item.Name === name)
        console.log('stack:', stack)

        if (stack) {
            console.log('Stack Found - Redeploying Stack')

            // const stack = portainer.updateStack({
            //     prune: true,
            //     pullImage: true,
            //     repositoryReferenceName: github.context.ref,
            //     repositoryAuthentication: false,
            //     // repositoryPassword: 'string',
            //     // repositoryUsername: 'string',
            // })
            // console.log('stack:', stack)
        } else {
            console.log('Stack NOT Found - Deploying NEW Stack')

            // const stack = portainer.createStack({
            //     name,
            //     swarmID,
            //     repositoryURL,
            //     composeFile: file,
            //     tlsskipVerify: false,
            //     fromAppTemplate: false,
            //     repositoryReferenceName: github.context.ref,
            //     repositoryAuthentication: false,
            //     // repositoryUsername: 'myGitUsername',
            //     // repositoryPassword: 'myGitPassword',
            // })
            // console.log('stack:', stack)
        }

        console.log('+++ SUCCESS ++++')
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
