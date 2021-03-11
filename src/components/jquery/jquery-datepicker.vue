<template>
  <div>
    <input style="width:120px;" id="j-datepicker" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import jQuery from 'jquery'
import jqueryui from 'jquery-ui'
import 'jquery-ui/ui/widgets/datepicker'

/**
 *
 * Jquery 日期共用元件<br>
 * @author GYC
 * @date 2020/03/17
 */
@Component({
  name: 'demo-jq-datepicker'
})
export default class JqueryDatePicker extends Vue {
  mounted () {
    (jQuery('#j-datepicker') as jqueryui).datepicker({
      dateFormat: 'yy-mm-dd',
      onSelect: (dateText: string) => {
        console.log('jquery datepicker component date change:' + dateText)
        this.$emit('jq-datepicker-change', dateText)
      }
    })
  }
}
</script>
