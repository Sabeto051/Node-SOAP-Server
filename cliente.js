const soap = require('soap')
const url = 'http://localhost:3000/Library?wsdl'

class Book {
  constructor(name = '', year = 0) {
    this.name = name
    this.year = year
  }
}

let book = new Book('test 2')

soap.createClient(url, function(err, client) {
  if (err) throw err
  console.log(client.describe().Library)
  console.log(client.describe().Library.BookLibrary.bookYear)

  client.bookYear({ book }, (err, res) => {
    if (err) throw err
    console.log(res)
  })
})
