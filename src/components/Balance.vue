<script setup>
import { defineProps } from 'vue';
import {currency} from '../utils/currency.js';
const props = defineProps({
    total:{
        type: Number,
        required: true
    }
})
</script>

<template>
    <h4>Your Balance</h4>
    <h1 id="balance">{{ currency(total) }}</h1>
</template>