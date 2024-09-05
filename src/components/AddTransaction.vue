<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');
const selectedOption = ref('1');

const emit = defineEmits(['addTransaction']);

const toast = useToast();
const onSubmit = () => {
    console.log(selectedOption.value);
    if (!text.value | !amount.value) {
        toast.error('Please add a text and amount');
        return;
    }

    console.log(selectedOption.value);

    const transactionData = {
        text: text.value,
        amount: selectedOption.value === '1' ? parseFloat(amount.value) : parseFloat(-amount.value)
    }

    emit('addTransaction', transactionData);

    text.value = '';
    amount.value = '';
}
</script>

<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <label>Category</label>
        <div class="radio-container">
            
            <label class="custom-radio">
                <input type="radio" id="1" value="1" v-model="selectedOption">
                Income
            </label>

            <label class="custom-radio">
                <input type="radio" id="2" value="2" v-model="selectedOption">
                Expense
            </label>
        </div>

        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" v-model="text" placeholder="Enter text...">
        </div>
        <div class="form-control">
            <label for="amount">Amount</label>
            <input type="number" id="amount" v-model="amount" placeholder="Enter amount...">
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>