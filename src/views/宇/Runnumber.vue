
<script>
import { i } from 'vite/dist/node/types.d-aGj9QkWt';

export default {
  data() {
    return {
      targetNumber1: 0,
      targetNumber2: 0
    };
  },
  methods: {
    run(num1,num2){
      for(i=0;i<=num1;i++){
        this.targetNumber1=i;
        console.log(this.targetNumber1)
      }
      for(j=0;j<=num2;j++){
        this.targetNumber2=j;
        console.log(this.targetNumber2)
      }
    }
  }
};
</script>

<template>
  <button type="button" @click="run(1234,4567)">
    {{targetNumber1, targetNumber2 }}
  </button>
</template>
