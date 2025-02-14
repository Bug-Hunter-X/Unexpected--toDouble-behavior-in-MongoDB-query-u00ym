```javascript
const query = { $expr: { $eq: [ { $toDouble: '$field1' }, { $toDouble: '$field2' } ] } };

const result = await collection.find(query).toArray();
```