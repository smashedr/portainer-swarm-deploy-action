const axios = require('axios')
const https = require('https')

class Portainer {
    constructor(url, token) {
        console.log('token:', token)
        url = url.replace(/\/$/, '')
        if (!url.endsWith('api')) {
            url += '/api'
        }
        this.url = url
        console.log('this.url:', this.url)
        this.agent = new https.Agent({
            rejectUnauthorized: false,
        })
        this.headers = {
            'X-API-Key': token,
        }
    }

    async getEndpoints() {
        const url = `${this.url}/endpoints`
        console.log('getEndpoints:', url)
        const response = await axios.get(url, {
            headers: this.headers,
            httpsAgent: this.agent,
        })
        return response.data
    }

    async getSwarm(id) {
        const url = `${this.url}/endpoints/${id}/docker/swarm`
        console.log('getSwarm:', url)
        const response = await axios.get(url, {
            headers: this.headers,
            httpsAgent: this.agent,
        })
        return response.data
    }

    async getStacks() {
        const url = `${this.url}/stacks`
        console.log('getStacks:', url)
        const response = await axios.get(url, {
            headers: this.headers,
            httpsAgent: this.agent,
        })
        return response.data
    }

    // async createStacks() {
    //     const url = `${this.url}/stacks/create/swarm/repository`
    //     console.log('createStacks:', url)
    //     const body = {
    //         composeFile: 'docker-compose.yml',
    //         fromAppTemplate: false,
    //         name: 'myStack',
    //         repositoryURL: 'https://github.com/openfaas/faas',
    //         repositoryAuthentication: true,
    //         repositoryUsername: 'myGitUsername',
    //         repositoryPassword: 'myGitPassword',
    //         repositoryReferenceName: 'refs/heads/master',
    //         swarmID: 'jpofkc0i9uo9wtx1zesuk649w',
    //         tlsskipVerify: false,
    //     }
    //     const response = await axios.get(url, {
    //         headers: this.headers,
    //         httpsAgent: this.agent,
    //     })
    //     return response.data
    // }
}

module.exports = Portainer
