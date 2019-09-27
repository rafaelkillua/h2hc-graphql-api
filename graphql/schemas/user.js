
exports.types = `
  type User {
    id: ID,
    name: String,
    password: String,
    email: String
  }

  type SignIn {
    user: User,
    token: String
  }
`

exports.queries = `
  user ( id: ID! ): User
  users ( page: Int! ): [User]
`

exports.mutations = `
  createUser ( name: String!, password: String!, email: String! ): User
  signIn ( email: String!, password: String! ): SignIn
`
