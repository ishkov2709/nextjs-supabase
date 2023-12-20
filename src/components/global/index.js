import UInput from './UInput.vue'
import UFile from './UFile.vue'
import UCheckbox from './UCheckbox.vue'
import URadio from './URadio.vue'

const components = [
  { name: 'UInput', component: UInput },
  { name: 'UFile', component: UFile },
  { name: 'UCheckbox', component: UCheckbox },
  { name: 'URadio', component: URadio }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
