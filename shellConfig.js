{
	"name": "Fun Translation",
	"description": "This composition translates English utterances to Shakespeare-style English, and translates any other utterance to plain English. It uses the **[Fun Translations](http://funtranslations.com/)** service for the former, and the **Watson Language Translation** service for the latter; the **Watson Language Identification** service helps us to determine the uttered language.",
	"kind": "composition",
	"choices": {
		"Fun Translations": {
			"instructions": "This example uses the Shakespeare API from Fun Translations. Enter the API Key below. If you do not enter a key, the usage limit is 5 calls/day.",
			"required": false,
			"source": "http://funtranslations.com/api#shakespeare",
			"input": [{"name": "ftApiKey", "label": "API Key"}]
		}
	}
}
