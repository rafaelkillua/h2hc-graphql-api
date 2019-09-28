const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    switch (mongoose.connection.readyState) {
      case 0:
        console.log('Desconectado')
        break;
      case 1:
        console.log('Conectado')
        break;
      case 2:
        console.log('Conectando...')
        break;
      case 3:
        console.log('Desconectando...')
        break;
    }
  }
)
mongoose.Error.messages.general.required = "The attribute '{PATH}' is required"
mongoose.Error.messages.Number.min = "The '{VALUE}' reported is less than the minimun threshold of '{MIN}'"
mongoose.Error.messages.Number.max = "The '{VALUE}' reported is greater than the maximun limit of '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' is not valid for attribute '{PATH}'"
