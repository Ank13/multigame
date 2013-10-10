var LocalStorageStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var questions = JSON.parse(window.localStorage.getItem("questions"));
        var results = questions.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, results);
    }

    this.findById = function(id, callback) {
        var questions = JSON.parse(window.localStorage.getItem("questions"));
        var employee = null;
        var l = questions.length;
        for (var i=0; i < l; i++) {
            if (questions[i].id === id) {
                employee = questions[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    var questions = [
            {"id": 1, "question": "Capital of Mass.", "answer": "Boston"},
            {"id": 2, "question": "Capital of NY", "answer": "Albany"},
            {"id": 3, "question": "Capital of CT", "answer": "Hartford"},
            {"id": 4, "question": "Capital of Illinois", "answer": "Springfield"},
        ];

    window.localStorage.setItem("questions", JSON.stringify(questions));

    callLater(successCallback);

}
