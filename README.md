This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Development server:

```bash
npm run dev
# or
yarn dev
```

## Dependencies

- Material UI
- nodemailer
- react-cookie-consent

See `package.json` for details and next/react dependencies.

## APIs

This repo makes use of the [Infomaniak kDrive API](https://developer.infomaniak.com/docs/api) to fetch documents stored in the [Infomaniak cloud](https://www.infomaniak.com/en/kdrive).

## .env

This repo requires a .env file with the following entries:

- Bearer token for the Infomaniak kDrive API
- Password for the e-mail account used for the SMTP connection
