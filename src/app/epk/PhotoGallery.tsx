"use client";
import { useEffect, useState } from "react";
import { getPhotos } from "flickr";
import Image from "next/image";

type Photo = {
  id: string;
  url_s: string;
  width_s?: string;
  height_s?: string;
  url_l: string;
};

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>("");

  const expandPhoto = (photoURL: string) => {
    setCurrentPhoto(photoURL);
    setDisplayPhoto(true);
  };

  const downloadPhoto = async (photoLink: string) => {
    try {
      const response = await fetch(photoLink);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "AuntVicki.jpg";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const allPhotos: Photo[] = await getPhotos();
      setPhotos(allPhotos || []);
    };
    fetchPhotos().catch(() => {
      console.log("fucking typescript hell!");
    });
  }, []);

  return (
    <>
      {displayPhoto ? (
        <div className="absolute left-0 top-0 h-screen w-screen bg-purple-400">
          <Image
            width={1600}
            height={900}
            src={currentPhoto}
            alt="photoToDownload"
            className="min-w-screen min-h-screen"
          />
          <div className="absolute right-1 top-2 flex w-4/12 justify-center gap-5">
            <button
              className="
        w-[100px] 
        rounded
        bg-blue-500 
        px-4 
        py-2 
        font-bold 
        text-white 
        hover:bg-blue-700"
              onClick={() => setDisplayPhoto(false)}
            >
              Back
            </button>
            <button
              className="
        hover:bg-roses-700 
        w-[100px]
        rounded 
        bg-rose-500 
        px-4 
        py-2 
        font-bold 
        text-white"
              onClick={() => downloadPhoto(currentPhoto)}
            >
              Download
            </button>
          </div>
        </div>
      ) : (
        <div
          className="
        m-auto
      mt-5 
      flex 
      w-10/12 
      flex-wrap 
      justify-center 
      gap-3 
      rounded-lg 
      border-4 
      border-white 
      bg-[#ffffff] 
      p-4"
        >
          <p className="w-full text-center">Click for larger/download</p>
          {photos.length > 0
            ? photos.map((photo) => (
                <div
                  key={photo.id}
                  className="
      relative 
      flex
      h-[150px] 
      w-[150px] 
      items-center 
      justify-center 
      overflow-hidden
      rounded-lg
      border-2
      border-black
      hover:scale-110"
                >
                  <Image
                    className="
              border-3 
              min-h-[150px] 
              min-w-[150px]
              rounded-md
              border-white
              hover:cursor-pointer
              "
                    width={200}
                    height={200}
                    src={photo.url_s}
                    alt=""
                    onClick={() => expandPhoto(photo.url_l)}
                  />
                </div>
              ))
            : null}
        </div>
      )}
    </>
  );
}
