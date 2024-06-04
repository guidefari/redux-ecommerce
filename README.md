# How to run
Make sure you have bun installed.
Then you start by installing modules:

```bash
bun install
```

To run client:

```bash
bun run dev:client
```

To run server:

```bash
bun run dev:server
```

## Git pre-commit hook

I set up a simple pre-commit hook on my laptop.
Bash script located at: `./git/hooks/pre-commit`:

```sh
#!/bin/sh

set -eu

npx @biomejs/biome check --staged --files-ignore-unknown=true --no-errors-on-unmatched
```


## Architectural choices
- Switching to monorepo for quicker iteration between FE & BE.
  - I strongly considered going with NextJS, my default for fullstack TS apps.


## Resources
- [Designs](https://www.figma.com/design/eNV3PGUxZz3EvvpnJplCAD/E-Commerce-UI-Kit-(Community)?node-id=0-1&t=AMzc6NsEyc4y7M9q-1)
- Mark Erikson & Jason Lengstorf:
  - [Learn modern redux](https://www.youtube.com/watch?v=9zySeP5vH9c&pp=ygUcbWFyayBlcmlrc29uIGphc29uIGxlbmdzdG9yZg%3D%3D)
  - [Redux in 2023](https://www.youtube.com/watch?v=MLbXjCddf3A&pp=ygUcbWFyayBlcmlrc29uIGphc29uIGxlbmdzdG9yZg%3D%3D)

---

# Todo
- ✅fetch data from frontend and put in a basic UI list.
- ✅Might switch to tailwind, haven't used MUI in years💀
## Current
- [Async error handling, macro level](https://redux-toolkit.js.org/rtk-query/usage/error-handling#handling-errors-at-a-macro-level)
- [ ] cart should probably be in local storage. pass in the entire object as action, plus quantity
- [ ] likely a good time for some unit tests. add to cart, remove from cart

## endpoints
  - ✅List All Products: GET 
    - filter - can be handled on frontend?
    - sort - can be handled on frontend?
  - ✅List Featured products: GET 
  - ✅Single Product details: GET, :id
  - ✅List categories: GET
  - ✅List All products in category: GET, :id
  - Checkout: POST
  - ✅List Discounted Products: GET

## UX
- Bandcamp inspired checkout modal?
