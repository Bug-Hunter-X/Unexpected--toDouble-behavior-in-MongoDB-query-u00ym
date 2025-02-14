```javascript
const query = {
  $expr: {
    $eq: [
      { $toDouble: { $trim: { $ifNull: ['$field1', '0'] } } },
      { $toDouble: { $trim: { $ifNull: ['$field2', '0'] } } }
    ]
  }
};

const result = await collection.find(query).toArray();
```