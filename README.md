## Weather App

Simple weather app that allows you to check basic weather info based on the provided city.

## Requirements

- Docker

## Sail

The local development environment uses Docker powered by Laravel Sail.

## Installation

```shell
$ git clone git@github.com:moskcv/weather.git
$ cd weather
$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
$ sail up -d
$ sail artisan migrate
$ sail npm install
$ sail npm run dev
```
