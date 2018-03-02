# XYZ news

A **News Aggregator** where users can browse through multiple news sources and their articles powered by [NewsAPI.org](https://newsapi.org/)

[Live Demo](https://xyznews.herokuapp.com/)

## Built using

- React
- React Router
- Node.js
- Express.js
- [NewsAPI](https://github.com/bzarras/newsapi)

## Configuration

- Clone the repository
- Install dependencies using:

```bash
npm install
```

or

```bash
yarn install
```

## Run the app

### In development mode

- From the projects root directory run:

```bash
npm dev
```

or

```bash
yarn dev
```

- This will concurrently run:
  - **Development server** on [localhost:5000](http://localhost:5000/)
  - **Client** on [localhost:3000](http://localhost:5000/)

### In production mode

- Move into the **client** directory and **build** for production
- Run the server

```bash
cd client
npm server
```

or

```bash
cd client
yarn server
```

## License

Copyright 2018 Steven Peniche

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.