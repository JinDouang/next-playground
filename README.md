# next playground

## Setup

```bash
./build.sh install
```

## Development (docker mode)


```bash
# clean and build new one
./dev.sh "new" 

# use existed image to run container
./dev.sh 


# Alternative
./build.sh stop && docker-compose up -d && docker logs -f next-playground --since 0s
```

## Development (standard)

### **Prerequisites**

- Node 18+ (node 18-alpine)

### Setup

```bash
npm install
# or
yarn install
```

### development server:

```bash
npm run dev
# or
yarn dev
```

## Contribution development

### Standard

#### Check lint
```bash
npm run lint
# or
yarn run lint
```

#### Check build

```bash
npm run build
# or
yarn run build
```

### With docker

#### Check lint
```bash
./build.sh lint
```

#### Check build
```bash
./build.sh build
```

## Environment

to change `./environment/.env-local`

### production

create file ${name_env}.json and start : 

```bash
# example project root /app
touch env-production.json
# insert content
# /app/* -> projects location
# /app/env-production.json 

NODE_PROD='env-production.json' yarn run build && NODE_PROD='env-production.json' yarn run start 
```

