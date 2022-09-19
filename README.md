# NLW eSports

Project Find your DUO NLW eSports Week.

![image](https://user-images.githubusercontent.com/15880212/189728034-1fb07f43-551e-4b96-bec5-cc1f2a0e8111.png)

This project was developed the backend with [nodejs](https://nodejs.org/en/) with [prisma](https://www.prisma.io/), database is sqlite, use the Insomnia file to import JSON for test routes. He have four routes created: 
- POST: Create Ad /games/:id/ads (:id = gameId)
- GET: Ad by Game games/:id (:id = gameId)
- GET: List all games /games
- GET: Discord by Ad /ads/:id/discord (:id = adId)

The web use [reactjs](https://reactjs.org) with [vitejs](https://vitejs.dev/) and the phenomenal [tailwindcss](https://tailwindcss.com/) for style. [phosphoricons](https://phosphoricons.com/) is use for the icons. The modal part use [Radix](https://github.com/radix-ui/primitives) primitives components for acessibility. He use [Axios](https://github.com/axios/axios) for consume the API server.

In the mobile use [react-native](https://facebook.github.io/react-native/) with [expo](https://expo.io/) managed workflow, and for navigation use [reactnavigation](https://reactnavigation.org/), the mobile use [clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/) and [push-notification](https://docs.expo.dev/push-notifications/overview/). [phosphoricons](https://phosphoricons.com/) mobile version is use for the icons.

---

### ❕ Install API

```bash
# Enter /server
$ cd server

# Install packages
$ npm install

# Migrations
$ npx prisma migrate dev

# Migrations Preview
$ npx prisma studio

# Run Back-end
$ npm run dev
```

---

### ❕ Install Web (Run Api first)

```bash
# Enter /web
$ cd web

# Install packages
$ npm install

# Run Vite
$ npm run dev
```

---

### ❕ Install Mobile (Run Api first)

```bash
# Enter /mobile
$ cd mobile

# Install packages
$ npm install

# Run Mobile
$ expo start
```

---
