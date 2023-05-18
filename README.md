# NextJS 13 Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Development

Follow these steps to start developing:

#### Dependencies

- [Node.js](https://nodejs.org/en/) 14.21.1
- [npm](https://www.npmjs.com/) 6.14.17

```bash
npm i
```

#### Environment Variables

Copy the content of .env.template inside .env.local, and adjust to your needs (if necessary).

#### Database

A mongodb server running on localhost:27017 is required.

#### Admin account

An admin account is required to access the admin panel. To create one, run the following command:

```bash
npm run TASK:CreateAdminCredentials
```

#### Development server

Now you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### GeNYG

Now you can run all GeNYC commands:

```bash
yo g-next:page
```

To generate a new page.

```bash
yo g-next:comp
```

To generate a new component.

```bash
yo g-next:model
```

To generate a new model.

```bash
yo g-next:api
```

To generate a new api.

##### Learn More

To learn more about GeNYG, take a look at the following resources:

- [GeNYG Documentation](https://github.com/getapper/generator-g-next#readme)
- [GeNYG Slides and Video Tutorial](https://docs.google.com/presentation/d/1pI6-jf8Zmr2pg9bcfOz29vhMZNqATOW7OwnHf3yRQck/edit#slide=id.p)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
