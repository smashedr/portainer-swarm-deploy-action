const axios = require('axios')
const https = require('https')

class Portainer {
    constructor(url, token) {
        url = url.replace(/\/$/, '')
        if (!url.endsWith('api')) {
            url += '/api'
        }
        const agent = new https.Agent({
            rejectUnauthorized: false,
        })
        this.headers = this.client = axios.create({
            baseURL: url,
            headers: { 'X-API-Key': token },
            httpsAgent: agent,
        })
    }

    async getEndpoints() {
        const response = await this.client.get('/endpoints')
        return response.data
    }

    async getSwarm(endpointId) {
        const response = await this.client.get(
            `/endpoints/${endpointId}/docker/swarm`
        )
        return response.data
    }

    async getStacks() {
        const response = await this.client.get('/stacks')
        return response.data
    }

    async updateStack(stackID, body) {
        const response = await this.client.put(
            `/stacks/${stackID}/git/redeploy`,
            body
        )
        return response.data
    }

    async createStack(body) {
        const response = await this.client.post(
            '/stacks/create/swarm/repository',
            body
        )
        return response.data
    }
}

module.exports = Portainer
