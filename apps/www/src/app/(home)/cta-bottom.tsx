import { Button } from '@pedaki/common/ui/button';
import React from 'react';

const CallToActionBottom = () => {
  return (
    <div className="border-t bg-gray-100 py-16">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold text-foreground md:text-5xl">
            Un outil essentiel <br className="hidden md:block" />
            pour toutes les écoles.
          </h1>
          <p className="py-8 text-base text-muted-foreground md:text-lg">
            Dites adieu aux feuilles de papier et aux tableurs Excel{' '}
            <br className="hidden md:block" />
            et bonjour à un outil simple qui se concentre sur ce qui compte vraiment.
          </p>
        </div>
        <div>
          <Button size="lg" variant="default" className="space-x-2 font-bold">
            <span>Créer mon compte</span>
            {/*TODO move this icon somewhere like in @pedaki/common/ui/icons */}
            <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBottom;
