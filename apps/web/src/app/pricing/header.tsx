import React from 'react';
import Balancer from 'react-wrap-balancer';

const PriceHeader = () => {
  return (
    <div className="mb-16 flex flex-col justify-center gap-4 px-4 pt-8">
      <div className="mx-auto">
        <Balancer
          as="h1"
          className="text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl"
        >
          Trouve une offre qui te convient
        </Balancer>
      </div>
      <div className="mx-auto max-w-screen-md">
        <Balancer
          as="p"
          className="text-center text-base leading-7 text-muted-foreground md:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum
          possimus repellat suscipit!
        </Balancer>
      </div>
    </div>
  );
};

export default PriceHeader;
