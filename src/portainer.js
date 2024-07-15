// import axios from 'axios'
// import https from 'https'

const axios = require('axios')
const https = require('https')

class Portainer {
    constructor(url, token) {
        this.url = url
        this.agent = new https.Agent({
            rejectUnauthorized: false,
        })
        this.headers = {
            'X-API-Key': token,
        }
    }

    async getStacks() {
        const url = `${this.url}/api/stacks`
        console.log('getStacks:', url)
        const response = await axios.get(url, {
            headers: this.headers,
            httpsAgent: this.agent,
        })
        return response.data
    }
}

module.exports = Portainer

// export async function getStacks(url, token) {
//     url = url + '/api/stacks'
//     console.log('getStacks:', url, token)
//     const agent = new https.Agent({
//         rejectUnauthorized: false,
//     })
//     const response = await axios.get(url, {
//         headers: {
//             'X-API-Key': token,
//         },
//         httpsAgent: agent,
//     })
//     return response.data
// }
