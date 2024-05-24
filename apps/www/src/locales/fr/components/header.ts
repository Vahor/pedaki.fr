export default {
	user: {
		guest: "Créer un dashboard",
		session: "Accéder au dashboard",
	},
	navigation: {
		modules: {
			label: "Modules",
			children: {
				management: {
					label: "Gestion de classes",
					description: "Créez et générez vos classes",
				},
			},
		},
		resources: {
			label: "Ressources",
			children: {
				pricing: {
					label: "Offres",
					description: "Offres hebergées et gratuites",
				},
				about: {
					label: "À propos",
					description: "Informations et détails sur pedaki",
				},
			},
		},
		docs: {
			label: "Documentation",
			children: {
				changelog: {
					label: "Changelog",
					description: "Voir les notes de version",
				},
				roadmap: {
					label: "Roadmap",
					description: "Voir la feuille de route",
				},
				faq: {
					label: "FAQ",
					description: "Voir les questions fréquentes",
				},
				post: {
					label: "Posts",
					description: "Voir les articles",
				},
			},
		},
	},
} as const;
