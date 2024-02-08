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
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php82-composer:latest \
    bash -c "composer install --ignore-platform-reqs && php -r \"file_exists('.env') || copy('.env.example', '.env');\" && php ./artisan key:generate"
$ ./vendor/bin/sail up -d
$ ./vendor/bin/sail artisan migrate
$ ./vendor/bin/sail npm install
$ ./vendor/bin/sail npm run dev
```

Fill `WEATHER_API_KEY` env variable.
