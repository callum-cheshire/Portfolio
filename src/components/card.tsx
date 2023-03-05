import React from "react";

interface CardProps {
  link: string;
  image: string;
  text: string;
}

const Card = ({ link, image, text }: CardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="mt-16 max-w-96 max-h-96 border border-tech-blue rounded flex flex-col m-2 text-center font-lekton cursor-pointer overflow-hidden justify-end bg-cover sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-88 xl:h-88 2xl:w-96 2xl:h-96"
    >
      <img src={image} alt="" className="w-full h-full bg-cover"></img>
      <figcaption className="p-2 text-md">
        <p>{text}</p>
      </figcaption>
    </a>
  );
};

export default Card;
