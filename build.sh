#!/bin/bash

install() {
    docker-compose run --rm node sh -c "yarn install"
}

run:dev:docker:build() {
   clean;
   sleep 2;
   docker-compose up -d --build
}

run:dev:docker() {
    docker-compose up -d
}

stop() {
    docker-compose stop
}

build() {
  docker-compose run --rm node sh -c "yarn run build"
}

lint() {
  docker-compose run --rm node sh -c "yarn run lint"
}

clean() {
   docker-compose down && docker rmi nextplayground_web-dev &
}

logs() {
   docker logs -f next-playground --since 0s;
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
    clean)
      clean
      ;;
    stop)
      stop
      ;;
    lint)
      lint
      ;;
    logs)
      logs
      ;;
    new)
      echo -e "Calling within argument 'new' \n"
      ;;
    *)
      echo "Invalid argument : $param"
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done