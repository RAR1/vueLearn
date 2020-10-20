import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//添加_init
initMixin(Vue)  

//添加$set、$delete
stateMixin(Vue)     

//添加$on、$once、$off、$emit
eventsMixin(Vue)  

//添加_update、$forceUpdate、$destroy
lifecycleMixin(Vue)

//添加$nextTick、_render
renderMixin(Vue)


export default Vue

