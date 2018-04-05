composer.try(
	composer.sequence(
		`/${projectName}/watson-language/languageId`,
		composer.if(
			p => p.language !== 'en',
			composer.sequence(
				p => ({translateFrom: p.language, translateTo: 'en', payload: p.payload}),
				`/${projectName}/watson-language/translator`
			),
			composer.sequence(
				p => ({text: p.payload}),
				`/${projectName}/en2shakespeare`
			)			
		)
	),
	err => ({payload:'Sorry we cannot translate your text'})
)
