## Example of referenced model

```
Product
	sku: String
	price: Number
	description

Order
	date_created: Date
	products: [Product.schema] (referenced)

	//^^ Product is embedded because if it changes in an existing order, that's very bad
```

```
Song
	name: String
	track: Number
	artist: {
		type: String,
		ref: 'Artist'
	}

	//^^ Artist is referenced because we want Artist changes to reflect in Songs

Artist
	name:String
	status: String 
```