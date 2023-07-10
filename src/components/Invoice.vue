<template>
    <router-link class="invoice flex" :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }">
      <div class="left flex">
        <span class="tracking-number">#{{ invoice.invoiceId }}</span>
        <span class="due-date">{{ invoice.paymentDueDate }}</span>
        <span class="person">{{ invoice.clientName }}</span>
      </div>
      <div class="right flex">
        <span class="price">${{ invoice.invoiceTotal }}</span>
        <div
          class="status-button flex"
          :class="{ paid: invoice.invoicePaid, draft: invoice.invoiceDraft, pending: invoice.invoicePending }"
        >
            <span style="background:transparent" v-if="invoice.invoicePaid">Paid</span>
            <span style="background:transparent" v-if="invoice.invoiceDraft">Draft</span>
            <span style="background:transparent" v-if="invoice.invoicePending">Pending</span>
        </div>
        <div class="icon">
          <img src="@/assets/icon-arrow-right.svg" alt="" />
        </div>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    name: "invoice",
    props: ["invoice"],
  };
  </script>
  
  <style lang="scss" scoped>
  .invoice {
    text-decoration: none;
    cursor: pointer;
    gap: 16px;
    margin-bottom: 16px;
    color: #fff;
    border-radius: 20px;
    padding: 28px 32px;
    background-color: #1e2139;
    align-items: center;
  
    span {
      font-size: 13px;
    }
    
    .left {
      background-color:#1e2139;
      align-items: center;
      flex-basis: 60%;
      gap: 16px;
  
      span {
        flex: 1;
      }
  
      .tracking-number {
        background-color:#1e2139;
        text-transform: uppercase;
      }
      .due-date{
        background-color:#1e2139;
      }
      .person{
        background-color:#1e2139;
      }
    }
  
    .right {
    .icon{
            background-color:#1e2139;
    }

      background-color:#1e2139;
      gap: 16px;
      flex-basis: 40%;
      align-items: center;
  
      .price {
        background-color:#1e2139;
        flex: 1;
        font-size: 16px;
        font-weight: 600px;
      }
    }
  }
  .status{
      background-color:#1e2139;
    }
  </style>