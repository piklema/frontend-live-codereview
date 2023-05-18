<template>

    <div class="book">
        <h2>{{ props.id }}</h2>
        <div>{{ props.description }}</div>
        <div>
            <div class="badge" v-for="tag in props.tags">
                {{ tag }}
            </div>
        </div>
        <div class="remove-btn" @click="deleteBook">Remove book</div>
        <div v-if="props.status == 'in_progress'" class="btn" @click="finishBook">Finish book</div>
        <div v-if="props.status == 'to_read'" class="btn" @click="startBook">Start book</div>
    </div>

</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import useBooksStore from '../store/books';

export default defineComponent({
    name: 'BookCard',
    props: ['id', 'author', 'title', 'description', 'status', 'tags'],
    setup(props) {
        const booksStore = useBooksStore();
        
        async function finishBook() {
            props.status = 'finished'
            await booksStore.updateBook(
                props.id,
                props.title,
                props.author,
                props.description,
                props.status,
                props.tags,
            )
        }

        async function startBook() {
            props.status = 'in_progress'
            await booksStore.updateBook(
                props.id,
                props.author,
                props.description,
                props.status,
                props.tags
            )
        }

        async function deleteBook() {
            await booksStore.deleteBook(props.id);
        }
        
        return {
            props,
            deleteBook,
            startBook,
            finishBook
        };
    },
});

</script>
  
<style lang="scss">
.book{
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 20px;
    color: #00339a;
}

.badge {
    background-color: grey;
    border-radius: 3px;
    padding: 2px;
}

</style>
  