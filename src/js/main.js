Vue.component('todo-list', {
  template: `
    <div>

      <!-- MASHEAD-NAVIGATION-BEGIN -->
      <header class="navigation-container">
        <h1 class="hp-h4 hp-nospacing hp-light"><span>&#9673;&nbsp;</span> TO<span class="hp-bold hp-text-color-green">DO</span>/ist</h1>
        <nav class="navigation-nav">
          <ul class="navigation-ul">
            <li class="hp-nospacing">
              <button class="navigation-category-button__save   hp-light" v-on:click="show_newCategoryModal(true)"><span class="hp-text-color-white hp-h4 hp-bold">+ &nbsp;</span> Create category</button>
            </li>
          </ul>
        </nav>
      </header>
      <!-- MASHEAD-NAVIGATION-END -->
      

      <!--  CATEGORY-MODAL-BEGIN -->
      <div class="modal-category-container" v-if="categoryModalVisible">
        <div class="modal-category   hp-background-color-white animated slideInDown">
          <div class="modal-category__head">
            <h4 class="modal-category-title   hp-nospacing">Create category</h4>
            <i class="modal-category-icon__close   material-icons hp-text-color-gray-3" v-on:click="show_newCategoryModal(false)">clear</i>
          </div>

          <div class="modal-category__rule"></div>

          <div class="modal-category__content">
            <form class="modal-category-form" action="" v-on:submit.prevent>
              <label class="modal-category-form__name-label   hp-small hp-text-color-gray-4 hp-light" for="categoryName">Write a category name:</label>
              <input id="categoryName" class="modal-category-form__name   hp-small" type="text" name="categoryName" value="" placeholder="Name" v-model="categoryName" v-on:keyup.enter="get_categoryInformation" autofocus>

              <label class="modal-category-form__color-label   hp-small hp-text-color-gray-4 hp-light" for="categoryColor">Select a background color:</label>
              <input id="categoryColor" class="modal-category-form__color   hp-small" type="color" name="categoryColor" value="#42b983" v-model="categoryColor">
            </form>
          </div>

          <div class="modal-category__rule"></div>

          <div class="modal-category__footer">
            <button class="modal-category-button__save   hp-light hp-small" type="button" v-on:click="get_categoryInformation">Create</button>
          </div>
        </div>
      </div>
      <!--  CATEGORY-MODAL-END -->


      <!--  CATEGORY-CARD-BEGIN -->
      <div class="main-container">
        <div class="category-card__container   hp-background-color-gray">
          <div class="category-card__header" style="background-color: #42b983;">
            <h4 class="hp-h1 hp-light hp-text-color-white hp-nospacing">WORK AT HOME</h4>
          </div>

          <div class="category-card__content">

          </div>

          <div class="category-card__footer">

          </div>
        </div>
      </div>
      <!--  CATEGORY-CARD-END -->

    </div>
  `,
  data () {
    return {
      /** CATEGORIES DATA **/
      categories: [],
      categoryName: '',
      categoryColor: '#42b983',
      categoryModalVisible: false,
      categoryInformationObject: []
    }
  },
  methods: {
    /** NEW CATEGORY MODAL **/
    show_newCategoryModal: function (value) {
      this.categoryModalVisible = value
    },
    get_categoryInformation: function () {
      let categoryInformation = {
        'name': this.categoryName,
        'color': this.categoryColor
      }
      this.add_category(categoryInformation)
    },
    add_category: function (category) {
      this.categories.push(category)
      this.clear_newCategoryModal()
    },
    clear_newCategoryModal: function () {
      this.categoryName = ''
      this.categoryColor = '#42b983'
      this.show_newCategoryModal(false)
    }
  }
})

let app = new Vue({
  el: '#app'
})
