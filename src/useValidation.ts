import { ref } from '@vue/composition-api'

export default function () {
  const validateList: void[] = []
  const boolean = ref(false)

  const validate = function () {
    return boolean.value = validateList.every(fn => fn)
  }

  const add = function (fn: void) {
    validateList.push(fn)
  }

  return [
    validate,
    add,
    boolean
  ]
}
