import axios from 'axios'
import https from 'https'

export async function getStacks(url, token) {
    url = url + '/api/stacks'
    console.log('getStacks:', url, token)

    const agent = new https.Agent({
        rejectUnauthorized: false,
    })

    const response = await axios.get(url, {
        headers: {
            'X-API-Key': token,
        },
        httpsAgent: agent,
    })

    return response.data
}
