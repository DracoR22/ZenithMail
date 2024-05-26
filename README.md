<div>
  <img src="/public/z1.png">
  <h1 align="center"ZenithMail</h1>
</div>

<p align="center">
  Create and run beautiful email marketing campaigns in minutes
</p>

### Key Features:

- 🛠️ Email drag and drop editor
- 💻 Beautiful landing page
- 💳 Flexible pricing with multiple monthly or anual plans
- 🖥️ AWS is used for sending the emails
- 🛍️ Emails can be completly automated
- 🌟 Clean, modern UI on top of NextUI
- 🔑 Authentication using Clerk
- ⌨️ 100% written in TypeScript

###  Create beautiful email templates in just minutes
<img src="/public/z2.png">


### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/DracoR22/ZenithMail
```

### Install packages

```shell
pnpm install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

ASTRA_DB_API_ENDPOINT=
ASTRA_DB_APPLICATION_TOKEN=

ZEROBOUNCE_API_KEY=

AWS_ACCESS_KEY_ID=
AWS_SECRET_KEY_ID=

STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

JWT_SECRET_KEY=

NEXT_PUBLIC_WEBSITE_URL=
```

### Start the app

```shell
pnpm dev
```

## Available commands

Running commands with npm `pnpm [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
| `build` | Build project                            |
| `lint`  | Check lint for project                   |