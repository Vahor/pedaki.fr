import { Button } from '@pedaki/common/ui/button';
import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h1>Être notifié lorsque l&apos;app sort</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, molestias?</p>
        </div>
        <div>
          <input type="text" />
          <Button>sub</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
