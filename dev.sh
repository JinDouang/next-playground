#!/bin/bash

# import build.sh for dev env purpose
source build.sh

if [ "$1" == "new" ]
  then
    echo -e "cleaning... and rebuilding before restarting next app \n";
    run:dev:docker:build;
  else
    echo -e "starting next app using existing built image \n";
    stop && run:dev:docker;
fi