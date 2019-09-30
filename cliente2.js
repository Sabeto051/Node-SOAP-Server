'strict'

const soap = require('soap')
const url = 'https://nagios.bpoconsultores.com.co/eia/soap/server.php?wsdl'

class Book {
  constructor(name = '') {
    this.name = name
  }
}

let book = new Book('test 2')

soap.createClient(url, { disableCache: true }, function(err, client) {
  if (err) throw err
  console.log(client.describe().Library)
  console.log(client.describe().Library.BookLibrary.bookYear)

  client.bookYear({ book }, (err, res) => {
    if (err) throw err
    console.log(res)
  })
})
