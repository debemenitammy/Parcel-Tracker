# Parcel Tracker Application

This is a application built with [Next.js](https://nextjs.org/), [Appwrite](https://appwrite.io/), and [Tailwind CSS](https://tailwindcss.com/) for tracking parcels in **real-time**.

## Setting up the project on Appwrite
This involves the following:
  - Creating a database and collections.
  - Adding attributes to the collections.  
  - Creating an Index to query the data from the collection.
  - Setting Collection persmissions
  
## Setting Environment Variables
Building the project required the use of some environment variables, remember to include in your cloned project. They include:
- API Endpoint URL
- Database ID
- Parcels Collection ID
- Project ID

## Running the Project
To run the project in development environment, you can run the following commands:

```bash
npm run dev
# or
yarn dev
```

## Viewing the Project 
To view the project on your browser, use this URL - [http://localhost:3000](http://localhost:3000).

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
