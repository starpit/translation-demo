{
	"name": "Fun Translation",
	"description": "This composition translates English utterances to Shakespeare-style English, and translates any other utterance to plain English. It uses the **[Fun Translations](http://funtranslations.com/)** service for the former, and the **Watson Language Translation** service for the latter; the **Watson Language Identification** service helps us to determine the uttered language.",
	"kind": "composition",
	"choices": {
		"Fun Translations": {
			"instructions": "This example uses the Shakespeare API from Fun Translations. If you do not enter a key, **the service rate limits usage** to 5 calls per day.",
			"required": false,
			"source": "http://funtranslations.com/api#shakespeare",
			"registration": "http://funtranslations.com/register",
			"input": [{"name": "ftApiKey", "label": "API Key"}]
		}
	}
}
