import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'AccountCard',
  props: {
    account: Object
  }
})
export default class AccountCard extends Vue { }
