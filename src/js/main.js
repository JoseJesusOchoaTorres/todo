Vue.component('todo-list', {
  template: `
    <div>

      <!-- MASHEAD-NAVIGATION-BEGIN -->
      <header class="navigation-container">
        <h1 class="hp-h4 hp-nospacing hp-light"><span>&#9673;&nbsp;</span> TO<span class="hp-bold hp-text-color-green">DO</span>/ist</h1>
        <nav class="navigation-nav">
          <ul class="navigation-ul">
            <li class="hp-nospacing">
              <button class="navigation-category-button__save   hp-light" v-on:click="show_newCategoryModal(true)"><i class="hp-text-color-white material-icons">add&nbsp;</i> Create category</button>
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
              <input id="categoryName" class="modal-category-form__name   hp-small" type="text" name="categoryName" placeholder="Name" v-model="categoryName" v-on:keyup.enter="get_categoryInformation" autofocus>

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


      <!--  TASK-MODAL-BEGIN -->
      <div class="modal-category-container" v-if="taskModalVisible">
        <div class="modal-category   hp-background-color-white animated slideInDown">
          <div class="modal-category__head">
            <h4 class="modal-category-title   hp-nospacing">Create new task</h4>
            <i class="modal-category-icon__close   material-icons hp-text-color-gray-3" v-on:click="show_newTaskModal(false)">clear</i>
          </div>

          <div class="modal-category__rule"></div>

          <div class="modal-category__content">
            <form class="modal-category-form" action="" v-on:submit.prevent>
              <label class="modal-category-form__name-label   hp-small hp-text-color-gray-4 hp-light" for="taskDescription">Describe your activity:</label>
              <input id="taskDescription" class="modal-category-form__name   hp-small" type="text" name="taskDescription" value="No description" placeholder="Task description" v-model="taskDescription" v-on:keyup.enter="get_taskInformation()" autofocus>

              <label class="modal-category-form__color-label   hp-small hp-text-color-gray-4 hp-light" for="taskDueDate">Due date:</label>
              <input id="taskDueDate" class="modal-category-form__dueDate   hp-small" type="datetime-local" name="taskDueDate" value="" v-model="taskDueDate">
            </form>
          </div>

          <div class="modal-category__rule"></div>

          <div class="modal-category__footer">
            <button class="modal-category-button__save   hp-light hp-small" type="button" v-on:click="get_taskInformation()">Create</button>
          </div>
        </div>
      </div>
      <!--  TASK-MODAL-END -->


      <!--  CATEGORY-CARD-BEGIN -->
      <div class="main-container">
        <div class="category-card__container   hp-background-color-gray" v-for="category in categories">
          <div class="category-card__header" v-bind:style="{background: category.color}">
            <h3 class="hp-h4 hp-light hp-text-color-white hp-nospacing">{{(category.name).toUpperCase()}}</h3>
          </div>

          <div class="category-card__content">
            <div class="category-card__content--heading">
              <h4>Pending tasks:</h4>
              <div class="modal-category__rule"></div>
            </div>

            <label class="category-card__task hp-small hp-text-color-gray-4 hp-light"><input type="checkbox" id="cbox1" value="first_checkbox"> Este es mi primer checkbox</label>

            <div class="category-card__content--heading">
              <h4>Finished tasks:</h4>
              <div class="modal-category__rule"></div>
            </div>

            <label class="category-card__task hp-done hp-small hp-text-color-gray-4 hp-light"><input type="checkbox" id="cbox1" value="first_checkbox" checked="true"> Este es mi primer checkbox</label>
          </div>

          <div class="modal-category__rule"></div>

          <div class="category-card__footer">
            <button class="category-card-button__deleteTask   hp-light hp-small hp-background-color-gray" type="button" v-on:click="get_categoryInformation"><i class="category-card-button__deleteTask--icon   material-icons">delete</i> &nbsp;Detele category</button>
            <button class="category-card-button__newTask   hp-light hp-small hp-background-color-green hp-text-color-white" type="button" v-on:click="show_newTaskModal(true); get_currentCategory(category.name);"><i class="category-card-button__newTask--icon   material-icons hp-text-color-white">add</i> &nbsp;Create task</button>
          </div>
        </div>

      </div>
      <!--  CATEGORY-CARD-END -->

    </div>
  `,
  data () {
    return {
      /** CATEGORIES DATA **/
      currentCategory: '',
      /** CATEGORIES DATA **/
      categories: [],
      categoryName: '',
      categoryColor: '#42b983',
      categoryModalVisible: false,
      categoryInformationObject: [],
      /** TASK DATA **/
      taskDueDate: '',
      taskDescription: '',
      taskModalVisible: false
    }
  },
  methods: {
    /** CURRENT CATEGORY **/
    get_currentCategory: function (currentCategory) {
      this.currentCategory = currentCategory
    },
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
      console.log(this.categories)
    },
    clear_newCategoryModal: function () {
      this.categoryName = ''
      this.categoryColor = '#42b983'
      this.show_newCategoryModal(false)
    },
    /** NEW TASK MODAL **/
    show_newTaskModal: function (value) {
      this.taskModalVisible = value
    },
    get_taskInformation: function () {
      let taskInformation = {
        'taskDescription': this.taskDescription,
        'taskDueDate': this.taskDueDate
      }
      console.log(taskInformation)
      this.add_task(taskInformation)
    },
    add_task: function (taskInformation) {
      console.log(this.categories)
      this.clear_newTaskModal()
    },
    clear_newTaskModal: function () {
      this.taskDescription = ''
      this.taskDueDate = ''
      this.show_newTaskModal(false)
    }
  }
})

let app = new Vue({
  el: '#app'
})
