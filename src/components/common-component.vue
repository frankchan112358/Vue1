<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

/**
 *
 * 各元件共用API及資料<br>
 * 1.共用資料:sharedModel資料<br>
 * 2.共用函式:TODO::<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component
export default class CommonComponent extends Vue {
  /**
   * singleton data
   */
  private static sharedModels: Map<
    string,
    {} | string | number | boolean
  > = CommonComponent.init();

  private static init (): Map<string, {} | string | number | boolean> {
    CommonComponent.sharedModels = new Map()
    return CommonComponent.sharedModels
  }

  /**
   * 取得所有共用資料
   */
  public getSharedModels () {
    return CommonComponent.sharedModels
  }

  /**
   * 設定單筆共用資料
   * @param  sharedModel 單筆共用資料
   */
  public setSharedModels (sharedModel) {
    CommonComponent.sharedModels = sharedModel
  }

  public addSharedModel (key: string, model: {} | string | number | boolean) {
    CommonComponent.sharedModels.set(key, model)
  }
}
</script>
