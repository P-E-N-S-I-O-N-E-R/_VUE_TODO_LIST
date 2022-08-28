const App = {
  data() {
    return {
      title: 'Список заметок',
      myplaceholder: 'Введите заметку...',
      inputValue: '',
      notes: []
    }
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value
    },
    addnew() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue),
        this.inputValue = ''
      }
    },
    removenote(index) {
this.notes.splice(index, 1)
    }
  }
}

Vue.createApp(App).mount('#app')