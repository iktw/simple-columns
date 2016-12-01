# Columnify
Simple helper package to put a collection of items into columns. 

The creation purpose of this package was that I wanted to order my items vertically with *-webkit-column-count* but failed. With this package, *-webkit-column-count* work perfectly fine.

### Installation
npm install columnify --save-dev

### Methods
| Name        | Type | Parameters | Returns |
| ------------- |-------------|-------------|-------------|
| columnifyInArrays | Function | (items=Array, cols=Number) | Array of Arrays with items |
| columnifyOrder | Function | (items=Array, cols=Number) | Array with items ordered by column |
