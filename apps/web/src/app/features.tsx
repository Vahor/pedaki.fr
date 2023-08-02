import { Card } from '@pedaki/common/ui/card';
import React from 'react';
import classes from './features.module.css';

const Features = () => {
  return (
    <section className="container bg-black pb-7">
      <h2 className="text-center text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur.</h2>
      <p className="mx-auto mt-6 max-w-md text-center text-base font-medium text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet!
      </p>

      <div className="relative mt-12 grid gap-8 lg:grid-cols-3 mb-2">
        <div
          className={classes.test + " h-[230px] flex w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"}
        ></div>
        <Card className="shadow"></Card>
        <Card className="shadow"></Card>
      </div>
    </section>
  );
};

export default Features;
