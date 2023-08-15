import React from 'react';

const Header = () => {
  {
    /* TODO: faire un composant pour les header de section, je les ai repris 4 fois */
  }

  return (
    <div className="flex flex-col justify-between lg:flex-row lg:items-center">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">Rejoignez notre communauté open source</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
        </p>
      </div>
    </div>
  );
};

export default Header;
