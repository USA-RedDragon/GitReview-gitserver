# Git Review GitServer

[![CircleCI](https://circleci.com/gh/USA-RedDragon/GitReview-gitserver/tree/master.svg?style=svg)](https://circleci.com/gh/USA-RedDragon/GitReview-gitserver/tree/master) [![codecov](https://codecov.io/gh/USA-RedDragon/gitserver/branch/master/graph/badge.svg)](https://codecov.io/gh/USA-RedDragon/gitserver) [![Gitserver](https://images.microbadger.com/badges/image/jamcswain/gitreview-gitserver.svg)](https://microbadger.com/images/jamcswain/gitreview-gitserver "Get your own image badge on microbadger.com")

## Deploying

The Docker images for the current master branch are found on [Docker Hub](https://hub.docker.com/u/jamcswain) under `gitreview-gitserver`. Versioning will be implemented once we reach stable 1.0.

The below documentation will go through the information you need.

As far as best practices, and how to deploy containers, a Google search is your best friend.

## Environment Variables

| Environment Variable |                   Details                   |  Example   |
| -------------------- | ------------------------------------------- | ---------- |
| REPO_PATH            | The path to keep git repos in               | /app/repos |
| AUTO_CREATE_REPOS    | Whether to create repos if they don't exist | true       |
| PORT                 | The port to listen to git on                | 29418      |
| DB_HOST              | The hostname for the database               | localhost  |
| DB_USERNAME          | The username for the database               | username   |
| DB_PASSWORD          | The password for the database               | password   |
| DB_DATABASE          | The name of the database to use             | data       |
| DB_DIALECT           | The type of database to use                 | mysql      |

## Volumes

|    Path    |            Details             |
| ---------- | ------------------------------ |
| /app/repos | The persistent git repo volume |

## Database

Any database system compatible with Sequelize will work with this

See <http://docs.sequelizejs.com/manual/dialects.html> for a list

Make sure to persist this and take backups
