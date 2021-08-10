<template>
  <div class="card-container">
    <div>ID: {{ account.id }}</div>
    <div>Name: {{ account.title }}</div>
    <div>Owner: {{ account.owner }}</div>
    <div>Created On: {{ account.createdAt }}</div>
    <div>Updated On: {{ account.updatedAt }}</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
