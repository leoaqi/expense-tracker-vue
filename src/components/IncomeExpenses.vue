<script setup>
import { defineProps } from 'vue';
import { currency } from '../utils/currency.js';
const props = defineProps({
    income: {
        type: Number,
        required: true
    },
    expense: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">+{{ currency(income) }}</p>

        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">-{{ currency(Math.abs(expense)) }}</p>
        </div>
    </div>
</template>