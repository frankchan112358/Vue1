import { shallowMount, createLocalVue } from "@vue/test-utils";
import CommonComponent from "@/components/common-component.vue";
import Instruction from "@/views/instruction/instruction.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueMaterial from "vue-material";
import Vue from "vue";
// Vue.config.ignoredElements = ['b-col', 'router-view']

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueMaterial);
describe("測試 Instruction", () => {
  const localVue = createLocalVue();
  localVue.mixin(CommonComponent);

  const wrapper = shallowMount(Instruction, {
    localVue
  });

  it("測試 Instruction is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("測試 共用 CommonComponent", () => {
    const model = wrapper.vm.getSharedModels();
    expect(model.get("instruction")).toBe("instruction shared data");
  });
});
