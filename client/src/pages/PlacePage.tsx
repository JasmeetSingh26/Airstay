import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";

type Props = {};

function PlacePage({}: Props) {
  const { id } = useParams();
  const [place, setPlace] = useState<any>(null);
  const [showMorePhotos, setShowMorePhotos] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place)
    return (
      <div className="text-center gap-2 items-center justify-center pt-8 inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        Uh, oh! This id doesn't seem to exist as a place is either moved or
        deleted.
      </div>
    );

  if (showMorePhotos)
    return (
      <div className="my-10 md:my-16 max-w-3xl mx-auto">
        <div
          onClick={() => setShowMorePhotos(false)}
          className="z-20 fixed inline-flex px-3 py-1 bg-white rounded-2xl text-black items-center shadow-md border border-gray-400"
        >
          <button
            onClick={() => setShowMorePhotos(true)}
            className="text-sm font-medium inline-flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-[2px] -ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            close photos
          </button>
        </div>
        <h1 className="text-xl font-semibold pt-10 md:pt-14">
          more photos of {place.title}
        </h1>
        {/* photos displayed here */}
        <div className="grid gap-2 md:gap-4 mt-6 rounded-2xl overflow-hidden">
          {place.photos?.length > 0 &&
            place.photos?.map((photo: any) => (
              <div className="">
                <img
                  className="object-cover w-full"
                  src={photo}
                  alt={photo.caption}
                />
              </div>
            ))}
        </div>
      </div>
    );

  return (
    <div className="mt-6 md:mt-10 py-10 px-6 md:px-28 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <h1 className="text-2xl leading-7 md:text-3xl font-semibold pb-1">
          {place.title}
        </h1>
        <div className="inline-flex items-center text-gray-500 gap-1 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 -ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <a
            className="underline font-medium text-sm md:text-base"
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/maps/place/${place.address}`}
          >
            {place.address}
          </a>
        </div>

        {/* Photos Section */}
        <div className="relative mt-6">
          <div className="grid gap-1 md:gap-3 grid-cols-[1fr_1fr_1fr] rounded-2xl overflow-hidden">
            {place.photos
              ?.slice(0, 3)
              .map((photo: string | any, index: number) => (
                <div key={index} className={`${index === 0 ? "" : "grid"}`}>
                  <img
                    className="object-cover w-full h-[200px] md:h-[300px]"
                    src={photo}
                    alt={`Photo ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          <div className="absolute inline-flex bottom-3 right-3 px-3 py-1 bg-white rounded-2xl text-black gap-1 items-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <button
              onClick={() => setShowMorePhotos(true)}
              className="text-base font-normal"
            >
              See more photos
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Description</h2>
            <pre className="mt-2 whitespace-pre-wrap text-gray-600 text-base text-justify font-outfit">
              {place.description}
            </pre>
            <div className="mt-6">
              <p>Check-in: {place.checkIn}</p>
              <p>Check-out: {place.checkOut}</p>
              <p>Max guests: {place.maxGuests}</p>
            </div>
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>

        {/* Extra Info Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Extra Info</h2>
          <pre className="mt-2 whitespace-pre-wrap text-gray-600 text-justify font-outfit">
            {place.extraInfo}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
