<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card style="height:300px">
            <div>
              <b-form-select v-model="countrySelected" :options="countryOptions"></b-form-select>
              <div class="mt-3">
                Selected:
                <strong>{{ countrySelected }}</strong>
              </div>
            </div>
          </b-card>
          <div style="height:100px"></div>
        </b-col>
        <b-col>
          <b-card style="height:300px">
            <div>使用Jquery Datepicker 選取的日期:{{jqDate}}</div>
            <div>
              <demo-jquery-datepicker @jq-datepicker-change="updateJqDatePicker"></demo-jquery-datepicker>
            </div>
          </b-card>
          <div style="height:100px"></div>
        </b-col>
        <b-col>
          <b-card style="height:300px">
            <div>
              <textarea class="textarea is-primary" v-model="memo" placeholder="Primary textarea"></textarea>
            </div>
            <div>{{memo}}</div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card style="height:300px">
            <div>
              <div>
                <b-button>Button</b-button>
                <b-button variant="danger">Button</b-button>
                <b-button variant="success">Button</b-button>
                <b-button variant="outline-primary">Button</b-button>
              </div>font awesome icon:
              <font-awesome-icon icon="coffee" />
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card style="height:300px">
            <div>
              <label for="example-datepicker">Choose a date</label>
              <b-form-datepicker
                id="example-datepicker"
                :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
                v-model="state"
                class="mb-2"
              ></b-form-datepicker>
              <p>Value: '{{ state }}'</p>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card style="height:300px">
            <div>
              <div>
                <md-dialog-confirm
                  :md-active.sync="active"
                  md-title="Use Google's location service?"
                  md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
                  md-confirm-text="Agree"
                  md-cancel-text="Disagree"
                  @md-cancel="onCancel"
                  @md-confirm="onConfirm"
                />
                <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button>
                <div v-if="value">Value: {{ value }}</div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { OptionModel } from '@/beans/shared-bean.vue'
import JqueryDatePicker from '@/components/jquery/jquery-datepicker.vue'
import CommonComponent from '@/components/common-component.vue'

/**
 *
 * UI元件<br>
 * 1.使用Material<br>
 * 2.使用 Font Awesome Icon<br>
 * @author GYC
 * @date 2020/03/20
 */
@Component({
  name: 'demo-ui',
  components: {
    'demo-jquery-datepicker': JqueryDatePicker
  }
})
export default class Ui extends Mixins(CommonComponent) {
  state: Date = new Date();
  memo = '';
  countrySelected = 'tw';
  countryOptions!: Array<OptionModel>;
  jqDate = '';
  active=false;
  value='';
  created () {
    console.log('Ui created')
    this.countryOptions = [
      { value: 'tw', text: 'Taiwan' },
      { value: 'us', text: 'United States of America' },
      { value: 'cn', text: 'China' }
    ]
    // 加入共用資料
    this.addSharedModel('ui', 'ui shared data')
    console.log('共用資料:')
    console.log(this.getSharedModels())
  }

  updateDate (date: string) {
    console.log('get jquery ui datepicker change:' + date)
  }

  updateJqDatePicker (dateVal: string) {
    console.log('get jquery ui datepicker change:' + dateVal)
    this.jqDate = dateVal
  }

  onConfirm () {
    this.value = 'Agreed'
  }

  onCancel () {
    this.value = 'Disagreed'
  }
}
</script>
<style scoped lang="css">
</style>
