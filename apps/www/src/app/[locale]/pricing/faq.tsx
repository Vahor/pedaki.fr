import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@pedaki/design/ui/accordion";
import { Button } from "@pedaki/design/ui/button";
import { AnimatedChevronRight } from "~/components/AnimatedChevronRight";
import Link from "next/link";
import React from "react";

const elements = [
	{
		name: "Est-ce qu'un remboursement peut-être demandé ?",
		description: "Un remboursement peut effectivement être demandé. La période pendant laquelle le serveur a déjà été utilisé sera néanmoins déduite dans tous les cas.",
	},
	{
		name: "Quels moyens paiement sont disponibles ?",
		description: "Nous utilisons Stripe pour réaliser les encaissements. Vous pouvez visualiser la liste complète sur leur site. Nous pouvons citer entre autres PayPal, Apple Pay et virements bancaires.",
	},
	{
		name: "Comment sont sauvegardées mes données ?",
		description: "Vos données sont chiffrées et stockées sur des serveurs à part qui vous sont dédiés.",
	},
	{
		name: "Et si j'arrête de payer ?",
		description: "Les paiements sont réalisés chaque mois pour renouveller votre instance. Si vous céssez les versements, l'instance sera définitivement supprimée et plus accessible.",
	},
];

const Faq = () => {
	return (
		<section
			className="container grid grid-cols-1 gap-8 pt-16 md:grid-cols-[1fr_2fr]"
			id="faq"
		>
			{/* TODO: add patten somewhere */}
			<div className="flex flex-col gap-4">
				<h2 className="text-title-3 font-bold">FAQ</h2>
				<p className="text-p-sm text-soft">
					Obtenez les réponses à vos questions les plus fréquentes
					directement deouis cette page.
					Pour toute autre question ou problème, vous pouvez nous contacter directement.
				</p>
				<Link href="/support">
					<Button variant="stroke-primary-main" className="font-semibold">
						<span className="text-main">Contacte-nous</span>
						<AnimatedChevronRight />
					</Button>
				</Link>
			</div>
			<Accordion type="single" collapsible>
				{elements.map((element) => (
					<AccordionItem value={element.name} key={element.name}>
						<AccordionTrigger>{element.name}</AccordionTrigger>
						<AccordionContent>{element.description}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default Faq;
