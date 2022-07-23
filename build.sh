install() {
    docker-compose run --rm node sh -c "npm install"
}

start:docker() {
    docker-compose up -d client
}

stop:docker() {
    docker-compose stop client
}

build() {
   npm run build
}

build:docker() {
   docker-compose run --rm node sh -c "npm run build"
}

clean() {
    docker rm --force next-client-ui
}

start() {
    npm run dev
}

for param in "$@"
do
  case $param in
    install)
      install
      ;;
    build)
      build
      ;;
    build:docker)
      build:docker
      ;;
    start)
      start
      ;;
    start:docker)
      start:docker
      ;;
    stop:docker)
      stop:docker
      ;;
    clean)
      clean
      ;;
    *)
      echo "Invalid argument : $param"
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done