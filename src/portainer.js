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

    async getStacks() {
        const url = `${this.url}/stacks`
        console.log('getStacks:', url)
        const response = await axios.get(url, {
            headers: this.headers,
            httpsAgent: this.agent,
        })
        return response.data
    }
}

module.exports = Portainer
