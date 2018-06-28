const { if: If, try: Try, sequence: Seq } = require('@ibm-functions/composer')

module.exports = Try(
    /* try */ Seq('watson-language/languageId',
		  If( /* cond */ p => p.language !== 'en',
		      /* then */ Seq(p => ({translateFrom: p.language,
                                            translateTo: 'en', payload: p.payload}),
			             'watson-language/translator'),
		      /* else */ Seq(p => ({text: p.payload}),
			             'lib/en2shakespeare'))),

    /* catch */ err => ({payload:'Sorry we cannot translate your text'}))
