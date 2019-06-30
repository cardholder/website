# Cardholder - Website

[![Build Status](https://travis-ci.org/cardholder/website.svg?branch=master)](https://travis-ci.org/cardholder/website)

Dies ist das Repository für die Web Anwendung von Cardholder, mit React.js. Die Anwendung ist im Modul "Full-Stack Development" im Sommersemester 2019 entstanden.

> [Gitmoji](https://gitmoji.carloscuesta.me/) wird für das visuelle Verständnis der Commits verwendet.

## Demo
Eine aktuelle Demo kann [hier](http://cardholder.surge.sh) gefunden werden.

## Benutzung
Anforderungen:
- node.js (10.16.0)

### npm
```bash
git clone https://github.com/cardholder/website.git
```

```bash
npm install
```

#### dev
```bash
npm start 
```

#### production
```bash
npm run build
```

## Surge
```bash
git clone https://github.com/cardholder/website.git
```

```bash
npm run build && surge
```

## Surge & TravisCI
```bash
git clone https://github.com/cardholder/website.git
```

Setze die Variablen `SURGE_LOGIN` und `SURGE_TOKEN` bei TravisCI.

```bash
surge token
```

Anpassungen an der `.travis.yml:13` müssen gemacht werden.

```yml
domain: deine.url
```

## Docker
```bash
git clone https://github.com/cardholder/website.git
```

### dev
```bash
docker build -t cardholder:dev .
```

```bash
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm cardholder:dev
```

### production
```bash
docker build -f Dockerfile-prod -t cardholder:prod .
```

```bash
docker run -it -p 80:80 --rm cardholder:prod
```
