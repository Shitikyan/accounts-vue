import { Options, Vue } from "vue-class-component";
import AccountTable from "@/components/Table/index.vue";

@Options({
  components: {
    AccountTable,
  },
  name: "Main",
})
export default class Main extends Vue { }
