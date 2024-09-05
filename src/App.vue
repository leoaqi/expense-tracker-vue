<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  transactions.value = JSON.parse(localStorage.getItem('transactions')) || [];
})
const total = computed(() => {
  return transactions.value.reduce((acc, t) => (acc += t.amount), 0);
})

const income = computed(() => {
  return transactions.value
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => (acc += t.amount), 0);
})

const expense = computed(() => {
  return transactions.value
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => (acc += t.amount), 0);
})

const generateRamdomId = () => {
  return Math.floor(Math.random() * 1000000000);
}

const handlleAddTransaction = (transactionData) => {
  transactions.value.push({
    id: generateRamdomId(),
    text: transactionData.text,
    amount: transactionData.amount
  })

  saveTransactionToLocalStorage();

  toast.success('Transaction added');
}

const handleDeleteTransaction = (id) => {
  transactions.value = transactions.value.filter((t) => t.id !== id);

  saveTransactionToLocalStorage();
  
  toast.success('Transaction deleted');
}

const saveTransactionToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
}

</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :income="income" :expense="expense" />
    <TransactionList :transactions="transactions" @deleteTransaction="handleDeleteTransaction" />
    <AddTransaction @addTransaction="handlleAddTransaction" />
  </div>
</template>