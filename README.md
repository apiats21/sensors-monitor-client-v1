# Sensors-monitor-v1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## SQL

CREATE TABLE `sensor` (
  `id` bigint NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `location` varchar(40) DEFAULT NULL,
  `model` varchar(30) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `range_from` bigint DEFAULT NULL,
  `range_to` bigint DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `unit` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `authorities` tinyblob,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `is_active` bit(1) NOT NULL,
  `is_not_locked` bit(1) NOT NULL,
  `join_date` datetime(6) DEFAULT NULL,
  `last_login_date` datetime(6) DEFAULT NULL,
  `last_login_date_display` datetime(6) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profile_image_url` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
)
