<template>
  <div class="row">
    <div class="col-5">
      <q-select
        :options="['Option1', 'Option2', 'Option3']"
        v-model="selectBox"
        outlined
        label="Options Box"
        name="options"
        :rules="[(val) => !!val || 'Option is required']"
      />
    </div>
    <button>Click Target</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectBox = ref();






</script>
