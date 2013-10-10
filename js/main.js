var app = {

  initialize: function() {
    this.store = new LocalStorageStore()
    this.game = new MultipleChoiceGame()
  }

}

app.initialize()
