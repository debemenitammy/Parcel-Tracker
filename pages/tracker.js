import { useEffect, useState } from 'react';
import appwrite from '../utils/appwrite-connection'
import config from '../utils/config';
import { Query } from "appwrite";
import { useRouter } from "next/router";
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tracker () {
  const [notifications, setNotifications] = useState([]);
  const [parcelData, setParcelData] = useState();
  
  const getParcelEvents = async (parcelNo) => {
    try {
      const response = await appwrite.database.listDocuments(
        config.appwriteDatabaseID, 
        config.appwriteParcelEventsID, 
        [ Query.equal('parcelId', [parcelNo]) ]
      );
      const data = response.documents.map((document) =>{
        const date = new Date(document.$updatedAt);
        return { 
          ...document, 
          bgColor: "bg-green-500", 
          datetime: date.toLocaleString() 
        }
      });
      setNotifications(() => data);
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();

  useEffect(() => {
    setParcelData(() => router.query);
    getParcelEvents(router.query.$id);
    registerSubcriber();
  }, [parcelData]);
  
  const registerSubcriber = () => {
    try {
      appwrite.client.subscribe('documents', (response) => {
        if (parcelData?.$id) getParcelEvents(parcelData?.$id);
      });
    } catch (error) {
      console.log(error, 'error');
    }
  }

  return <>
  <div className='flex items-center justify-center h-screen'> 
    <div> 
      <div className='mb-4 text-center'> 
        <h1 className='text-[3rem] font-bold'>Parcel Information</h1>
        <h2 className='text-[1.8rem] font-medium'>Parcel Name: {parcelData?.name}</h2>
        <h2 className='text-[1.8rem] font-medium mb-4'>Parcel No: {parcelData?.$id}</h2>
      </div>


      <div className="flow-root ">
        <ul role="list" className="mt-4 -mb-8">
          {notifications?.map((event, eventIdx) => (
            <li key={event.$id}>
              <div className="relative pb-8">
                {eventIdx !== notifications.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.bgColor,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                    >

                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="pl-5 text-lg text-gray-500">
                        {event.status}
                      </p>
                    </div>
                    <div className="text-lg text-right text-gray-500 whitespace-nowrap">
                      <p>{event.datetime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-20 w-full p-4 text-center hover:bg-slate-200 !bg-white text-black'> 
          <Link href="./" className='w-full p-4 !bg-white text-color-black'>Home</Link>
        </div>
      </div>
    </div>
  </div>
  </>
}