<template>

    <h2>Books</h2>

    <div v-show="authStore.userData.permissions.includes('watch-all')">
        <BookCard 
            v-for="book in booksStore.books"
            :id="book.id"
            :author="book.author"
            :description="book.description"
            :title="book.title"
            :tags="book.tags"
            >
        </BookCard>
    </div>

    <div v-show="!authStore.userData.permissions.includes('watch-all')">
        Sorry, you don't have enough rights to acccess this page
    </div>
    


</template>
  
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useBooksStore from '../store/books';
import BookCard from '../components/BookCard.vue';
import useAuthStore from '../store/auth';

export default defineComponent({
    name: 'MainView',
    components: {
        BookCard
    },
    setup(props) {
        const booksStore = useBooksStore();
        const authStore = useAuthStore();


        onMounted(() => {
            await authStore.getUserData(3);
            await booksStore.getBooks();
        })

        return {
            props,
            booksStore,
            authStore
        };
    },
});

</script>
  
<style lang="scss">

h2 {
    font-size: 22px;
    color: #000;
}



</style>
  