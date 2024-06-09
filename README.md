# How to run
- Make sure you have [bun](https://bun.sh/) installed.
- From the root directory, run:

```bash
bun install
```
## Run server:

```bash
bun run dev:server
```

## To run client:

First, you want to create a .env file in the `./client` directory. 
You can copy paste the contents of `./client/.env.example`

```bash
bun run dev:client
```

### Sidenote:
I did development against the live lambdas, I set my vite env variables as seen in `sst.config.ts`
```ts
const web = new sst.aws.StaticSite("ViteEcommerce", {
			path: "client/",
			build: {} ,
			environment: {
				VITE_API_BASE_URL: hono.url,
			},
		});
```

## I set up a git pre-commit hook

I set up a simple pre-commit hook on my laptop.
Bash script located at: `./git/hooks/pre-commit`:

```sh
#!/bin/sh

set -eu

npx @biomejs/biome check --staged --files-ignore-unknown=true --no-errors-on-unmatched
```


## Architectural choices
- Switched to monorepo for quicker iteration between FE & BE.
  - I strongly considered going with NextJS, my default for fullstack TS apps.
- Deployed to AWS via [SST](https://ion.sst.dev/).


## Resources
- [Designs](https://www.figma.com/design/eNV3PGUxZz3EvvpnJplCAD/E-Commerce-UI-Kit-(Community)?node-id=0-1&t=AMzc6NsEyc4y7M9q-1)
- Mark Erikson & Jason Lengstorf:
  - [Learn modern redux](https://www.youtube.com/watch?v=9zySeP5vH9c&pp=ygUcbWFyayBlcmlrc29uIGphc29uIGxlbmdzdG9yZg%3D%3D)
  - [Redux in 2023](https://www.youtube.com/watch?v=MLbXjCddf3A&pp=ygUcbWFyayBlcmlrc29uIGphc29uIGxlbmdzdG9yZg%3D%3D)

---

# Todo
- ✅fetch data from frontend and put in a basic UI list.
- ✅Might switch to tailwind, haven't used MUI in years💀
- [ ] [Async error handling, macro level](https://redux-toolkit.js.org/rtk-query/usage/error-handling#handling-errors-at-a-macro-level)
- [ ] cart should probably be in local storage. pass in the entire object as action, plus quantity
- [ ] likely a good time for some unit tests. add to cart, remove from cart
- [ ] When you click on a category on home screen, you get taken to view products with a pre-selected filter
  - Also keep this state in the url
- [ ] Product details modal
  - Try url state for this one too

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
