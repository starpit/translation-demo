composer.try(
	composer.sequence(
		`/${namespace}/watson-language/languageId`,
		composer.if(
			p => p.language !== 'en',
			composer.sequence(
				p => ({translateFrom: p.language, translateTo: 'en', payload: p.payload}),
				`/${namespace}/watson-language/translator`
			),
			composer.sequence(
				p => ({text: p.payload}),
				`/${namespace}/${projectName}/en2shakespeare`
			)			
		)
	),
	err => ({payload:'Sorry we cannot translate your text'})
)
