<script setup>
import {currency} from '../utils/currency.js';
import {defineProps} from 'vue';

const props = defineProps({
    transactions: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['deleteTransaction']);

const deleteId = (id) => {
    emit('deleteTransaction', id);
}
</script>

<template>
    <h3>History</h3>
    <ul class="list" id="list">
        <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>{{currency(transaction.amount)}}</span>
            <button class="delete-btn" @click="deleteId(transaction.id)">x</button>
        </li>
    </ul>
</template>