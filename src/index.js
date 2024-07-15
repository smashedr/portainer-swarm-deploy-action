import * as core from '@actions/core'
// import * as github from '@actions/github'

import { getStacks } from './portainer.js'

;(async () => {
    try {
        // console.log('github.context.issue:', github.context)

        const url = core.getInput('url', { required: true })
        console.log('url:', url)
        const token = core.getInput('token', { required: true })
        console.log('token:', token)

        const stacks = await getStacks(url, token)
        console.log('stacks:', stacks)

        console.log('+++ SUCCESS ++++')
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
