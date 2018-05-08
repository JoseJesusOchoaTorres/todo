Vue.component('modal-category', {
  template: `
    <div class="modal-category-container">

      <div class="modal-category   hp-background-color-white">
        <div class="modal-category__head">
          <h4 class="modal-category-title   hp-nospacing">Create category</h4>
          <a class="hp-nospacing hp-flex" href="#"><i class="modal-category-icon__close   material-icons hp-text-color-gray-3">clear</i></a>
        </div>

        <div class="modal-category__rule"></div>

        <div class="modal-category__content">
          <form class="modal-category-form" action="">
            <label class="modal-category-form__name-label   hp-small hp-text-color-gray-4 hp-light" for="categoryName">Write a category name:</label>
            <input id="categoryName" class="modal-category-form__name   hp-small" type="text" name="categoryName" value="" placeholder="Name">

            <label class="modal-category-form__color-label   hp-small hp-text-color-gray-4 hp-light" for="categoryColor">Select a background color:</label>
            <input id="categoryColor" class="modal-category-form__color   hp-small" type="color" name="categoryColor" value="#42b983">
          </form>
        </div>

        <div class="modal-category__rule"></div>

        <div class="modal-category__footer">
          <button class="modal-category-button__save   hp-light hp-small" type="button">Create</button>
        </div>
      </div>

    </div>
  `
})

Vue.component('custom-navigation', {
  template: `
    <header class="navigation-container">
      <h1 class="hp-h4 hp-nospacing hp-light"><span>&#9673;&nbsp;</span> TO<span class="hp-bold hp-text-color-green">DO</span>/ist</h1>
      <nav class="navigation-nav">
        <ul class="navigation-ul">
          <li class="hp-nospacing">
            <button class="navigation-category-button__save   hp-light"><span class="hp-text-color-white hp-h4 hp-bold">+ &nbsp;</span> Create category</button>
          </li>
        </ul>
      </nav>
    </header>
  `
})

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
