<h1 align="center">
  <img alt="Logo" src=".github/assets/logo.svg" width="100px">
</h1>

<h3 align="center">
  Application for GoBarber Legacy
</h3>

<p align="center">The best way to schedule your service!</p>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wladimirgrf/gobarber-legacy?color=%237159c1">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wladimirgrf/gobarber-legacy?color=%237159c1">

  <img alt="Repository issues" src="https://img.shields.io/github/issues/wladimirgrf/gobarber-legacy?color=%237159c1">

  <img alt="GitHub" src="https://img.shields.io/github/license/wladimirgrf/gobarber-legacy?color=%237159c1">
</p>


## 👨🏻‍💻  About

This application provides everything needed to organize appointments for a Barber Shop.

Set up an appointment with your barber 24/7 with just a few taps.


## 💻 Getting started

**Clone the project and access the folder**

```bash
$ git clone https://github.com/wladimirgrf/gobarber-legacy.git && cd gobarber-legacy
```

**Follow the steps below**

- ##### To run the API

```bash
$ cd backend

# Project dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name postgres -e POSTGRES_PASSWORD={password} -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn sequelize db:migrate

# Start the api service
$ yarn dev
```

- ##### To start the web system
```bash
$ cd web

# Project dependencies
$ yarn

# Start the client
$ yarn start
```

- ##### To emulate with Android
```bash
$ cd mobile

# Make sure the emulator is already started
$ yarn android
```

- ##### To emulate with IOS
```bash
$ cd mobile

# IOS dependencies
$ cd ios
$ pod install

# Start the APP
$ yarn ios
```
> ##### To run the mobile version, make sure to set up your development environment: <a href="https://react-native.rocketseat.dev">Guide</a>

## 🤝 Contributing

**Fork the repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork wladimirgrf/gobarber-legacy
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone fork-url && cd gobarber-legacy

# Create a branch for your edits
$ git checkout -b new-feature

# Make the commit with your changes
$ git commit -m 'feat: New feature'

# Send the code to your remote branch
$ git push origin new-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

