const config = Object.freeze({
    appwriteURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    appwriteDatabaseID: process.env.NEXT_PUBLIC_DATABASE_ID,
    appwriteParcelsID: process.env.NEXT_PUBLIC_PARCELS_ID,
    appwriteParcelEventsID: process.env.NEXT_PUBLIC_PARCELEVENTS_ID,
    appwriteProjectID: process.env.NEXT_PUBLIC_PROJECT_ID,
  })
  
export default config;