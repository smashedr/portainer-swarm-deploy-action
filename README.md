[![Tags](https://img.shields.io/github/actions/workflow/status/cssnr/portainer-swarm-deploy-action/tags.yaml?logo=github&logoColor=white&label=tags)](https://github.com/cssnr/portainer-swarm-deploy-action/actions/workflows/tags.yaml)
[![CSSNR Website](https://img.shields.io/badge/pages-website-blue?logo=github&logoColor=white&color=blue)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
# Portainer Swarm Deploy Action

Deploy a GitHub Repository Stack to Portainer or Update if Stack Exists.

*   [Inputs](#Inputs)
*   [Simple Example](#Simple-Example)
*   [Known Issues](#Known-Issues)
*   [Support](#Support)

> [!NOTE]   
> Please submit
> a [Feature Request](https://github.com/cssnr/portainer-swarm-deploy-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/portainer-swarm-deploy-action/issues) if you find any bugs.

## Inputs

| input    | required | default           | description           |
|----------|----------|-------------------|-----------------------|
| url      | Yes      | -                 | Portainer URL         |
| token    | Yes      | -                 | Portainer Token       |
| endpoint | No       | `endpoints[0].Id` | Portainer Endpoint ID |
| name     | Yes      | -                 | Stack Name            |
| file     | No       | `compose.yaml`    | Compose File          |

Note: Currently testing so use: `smashedr/portainer-swarm-deploy-action@master`

```yaml
  - name: "Parse Issue"
    id: issue
    uses: cssnr/portainer-swarm-deploy-action@v1
    with:
      url: https://portainer.example.com:9443
      token: ${{ secrets.PORTAINER_TOKEN }}
      endpoint: 2
      name: stack-name
      file: docker-compose.yaml
```

## Known Issues

- Only works for repository stacks but can be expanded to support other types.

This is a very simple action, for more details see
[src/index.js](src%2Findex.js) and [src/portainer.js](src%2Fportainer.js).

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/portainer-swarm-deploy-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/portainer-swarm-deploy-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/portainer-swarm-deploy-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Parse%20Issue%20Form)
