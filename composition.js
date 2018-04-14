composer.try(
	composer.sequence(
		'watson-language/languageId',
		composer.if(
			p => p.language !== 'en',
			composer.sequence(
				p => ({translateFrom: p.language, translateTo: 'en', payload: p.payload}),
				'watson-language/translator'
			),
			composer.sequence(
				p => ({text: p.payload}),
				'translation-demo/en2shakespeare'
			)			
		)
	),
	err => ({payload:'Sorry we cannot translate your text'})
)
