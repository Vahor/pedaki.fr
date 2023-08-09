import React from 'react';

const PriceTable = () => {
  return (
    <div className="mx-8">
      <div className="-mb-2 flex w-full text-base">
        <div className="w-[24%]"></div>
        <div className="w-[38%] text-left font-semibold">
          <span>Self-Host</span>
          <div>
            <span className="text-3xl">Gratuit</span>
          </div>
        </div>
        <div className="w-[38%] text-left font-semibold">
          <span>Scaler</span>
          <div>
            <span className="text-3xl">20e</span>
            <span className="pl-1 text-xs text-primary">/mois</span>
          </div>
          <span>Paiement à l&apos;année</span>
        </div>
      </div>
      <h1 className="border-b border-black  pb-2 text-xl font-bold">Sécurité</h1>
      <table className="mb-16 w-full text-base">
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr className="border-b text-sm transition last:border-b hover:bg-secondary" key={i}>
              <td className="w-[24%] min-w-[200px] py-4 pl-4 text-left font-semibold">Prix {i}</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="border-b border-black pb-2 text-xl font-bold">Features</h1>
      <table className="mb-16 w-full text-base">
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr className="border-b text-sm transition last:border-b hover:bg-secondary" key={i}>
              <td className="w-[24%] min-w-[200px] py-4 pl-4 text-left font-semibold">Prix {i}</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">
                  <span>0€</span>
              </td>
            </tr>
          ))}
          <tr className="border-b text-sm transition last:border-b hover:bg-secondary">
              <td className="w-[24%] min-w-[200px] py-4 pl-4 text-left font-semibold">Perfs</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">Tu paie toi même</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">
                  <span>Inclus</span>
                  <p>
                      <span className="text-xs text-muted-foreground">+5e pour une grosse machine</span>
                  </p>
              </td>
          </tr>
        </tbody>
      </table>
      <h1 className="border-b border-black  pb-2 text-xl font-bold">Autre chose</h1>
      <table className="mb-16 w-full text-base">
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr className="border-b text-sm transition last:border-b hover:bg-secondary" key={i}>
              <td className="w-[24%] min-w-[200px] py-4 pl-4 text-left font-semibold">Prix {i}</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
              <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
