import { Options, Vue } from "vue-class-component";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import axios from "axios";
import Loading from '../Progress/index.vue';
import { Account } from "@/types";
import { dateTransformer } from '@/helper';

@Options({
  components: {
    DataTable,
    Column,
    ColumnGroup,
    Loading
  },
})
export default class AccountTable extends Vue {
  accounts: Array<Account> = [];

  async getAccounts() {
    const API_URL = process.env.VUE_APP_API_URL;

    const res = await axios.get(API_URL);
    const payload = res.data.map((data: any) => {

      const createdAt = dateTransformer(data.createdAt);
      const updatedAt = dateTransformer(data.updatedAt);

      return {
        ...data,
        createdAt,
        updatedAt
      }
    })
    this.accounts = payload;
  }

  created() {
    this.getAccounts();
  }

  accountData(event: any) {
    const id = event.data.id;
    this.$router.push({ path: `/account/${id}` });
  }
}
