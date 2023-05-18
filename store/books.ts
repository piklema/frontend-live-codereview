import { defineStore } from 'pinia';
import {getBooks, updateBook, deleteBook} from '../utils/backend';

export default defineStore('books', {
  state: () => ({
    books: [],
    categories: [],
  }),
  actions: {
    async getBooks() {
      const response = await getBooks();  // imitation of backend requiest
      this.$state.books = response.data;
      return response.data;
    },
    async updateBook(id, title, status, tags, author, description) {
        const response = await updateBook(id, title, status, tags, author, description); // imitation of backend requiest
        return response.status
    },

    async deleteBokk(id){
        const response = await deleteBook(id); // imitation of backend requiest
        return response.status
    },
  },
});
