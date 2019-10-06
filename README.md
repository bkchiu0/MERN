# PERN

MongoDB Express React Node

## Dependencies

- Docker
- npm
- Node js
- IDE (preferably VSCode with TSLint)

## Commands

Deploy all the containers in the background

```bash
docker-compose up -d
```

Deploy all the containers with live log output

```bash
docker-compose up
```

Stop and remove containers

```bash
docker-compose down
```

## Notes

Depending on what version of docker you have the IP addresses for your containers may differ

- Docker toolbox (legacy docker) uses the ip `192.168.99.100`
- Regular Docker uses the ip `127.0.0.1`
