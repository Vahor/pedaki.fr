import React from "react";
import Image from "next/image";
import mock from "../../public/a/mock-hero.png";
import { Dialog, DialogContent, DialogTrigger } from "@pedaki/common/ui/dialog";
import { AspectRatio } from "@pedaki/common/ui/aspect-ratio";

const VideoDemo = () => {
  return (
    <Dialog>
      <DialogTrigger
        aria-label="Play video"
        className="group relative mx-auto mt-8 flex w-full max-w-screen-lg cursor-pointer justify-center px-4"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-600 opacity-50 md:h-16 md:w-16">
            <svg
              width="512"
              height="512"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Play button"
            >
              <path fill="#ffffff" d="M8 5.14v14l11-7l-11-7Z" />
            </svg>
          </div>
        </div>
        <Image src={mock} alt="mock" layout="responsive" priority />
      </DialogTrigger>
      <DialogContent className="md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <AspectRatio ratio={16 / 9} className="p-2">
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            allowFullScreen
            className="h-full w-full rounded-md object-cover"
          ></iframe>
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDemo;
