<template>
  <div v-if="!account.id">
    <Loading />
  </div>
  <div v-else>
    <div class="icon-container">
      <BackButton path="/" />
    </div>
    <div class="main-container">
      <AccountCard :account="account" />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
