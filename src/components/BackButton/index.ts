import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    path: String
  }
})
export default class BackButton extends Vue {
  path!: string;

  navigateBack() {
    this.$router.push({ path: this.path })
  }
}
