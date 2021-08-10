<template>
  <div v-if="accounts.length === 0">
    <Loading />
  </div>
  <div v-else>
    <DataTable
      :value="accounts"
      :rowHover="true"
      :paginator="true"
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      @row-click="accountData($event)"
      responsiveLayout="scroll"
    >
      <Column field="id" header="ID"></Column>
      <Column field="title" header="Name"></Column>
      <Column field="createdAt" header="Created On"></Column>
      <Column field="owner" header="Owner"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
