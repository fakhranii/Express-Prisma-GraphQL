export const books = [
  {
    title: 'Book 1',
    author: 'John Doe',
  },{
    title: 'Book 2',
    author: 'John Doe',
  }
]

export const resolvers = {
  Query: {
    books: ()=> {
      return books;
    }
  }
}