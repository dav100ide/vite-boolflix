/*=================================
   store reattivo 
==============================*/
import { reactive } from 'vue';

export const store = reactive({
   //store dei dati in comune
   apiKey: 'dd6e3a1cbd4f4b17c20f78ce83edad8c',
   searchText: '',
   movies: [],
   shows: [],
});
