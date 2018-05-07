Vue.component('modal-category', {
  template: `
    <div class="modal-category-container">
      <div class="modal-category   hp-background-color-white">
        <i class="modal-category-icon__close   material-icons hp-text-color-gray-2">clear</i>
      </div>
    </div>
  `
})

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
