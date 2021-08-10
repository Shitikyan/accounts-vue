import { Options, Vue } from "vue-class-component";
import axios from "axios";
import AccountCard from '@/components/AccountCard/index.vue';
import Loading from '@/components/Progress/index.vue';
import BackButton from '@/components/BackButton/index.vue';
import { Account } from "@/types";
import { dateTransformer } from '@/helper';

@Options({
  name: "Account",
  components: {
    AccountCard,
    Loading,
    BackButton
  }
})
export default class AccountComponent extends Vue {
  account: any = {};
  createdAt = "";
  updatedAt = "";

  async getAccount() {
    const API_URL = process.env.VUE_APP_API_URL;

    const id = this.$route.params.id;
    const res = await axios.get(`${API_URL}/${id}`);
    const data: Account = res.data;

    const createdAt = dateTransformer(data.createdAt);
    const updatedAt = dateTransformer(data.updatedAt);
    this.account = {
      ...data,
      createdAt,
      updatedAt
    };
  }

  async mounted() {
    await this.getAccount();
  }
}
