# Biconomy SDK v4 with Next.js 14

This repository shows how to use Biconomy's Account Abstraction features to send gasless transaction and pay for fees with ERC20 tokens, as well as how to onboard users easily with Web3Auth (Social Login modal)

## Packages

- ⚡ Next.js with App Router support
- 🔥 Type checking TypeScript
- 💎 Integrate with Tailwind CSS
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with ESLint
- 💖 Code Formatter with Prettier
- 🦊 Husky for Git Hooks
- 🚓 Lint git commit with Commitlint
- 💻 Account Abasctraction with Biconomy SDK v4
- 🚀 Social login with Web3Auth

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Turbo for bundler optimization

## Getting started

```
yarn install
yarn dev
```
Create your Web3AuthAccount [here](https://web3auth.io/).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About
Proof2work provides free tutorials to build stuffs in the web3 and blockchain world. Check our tutorials on [our blog](https://www.proof2work.com/).

### env file 

```
NEXT_PUBLIC_WEB3AUTH_API_KEY // get from web3 ath website 

NEXT_PUBLIC_SEPOLIA_TX_EXPLORER // chain url can be found on transation or explorer

NEXT_PUBLIC_SEPOLIA_ADDRESS_EXPLORER // chain url can be found on transation or explorer

NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY // can get from biconomy url
 
NEXT_PUBLIC_BICONOMY_BUNDLER_URL // same from biconomy
```