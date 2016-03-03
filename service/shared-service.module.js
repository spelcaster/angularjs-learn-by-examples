var app = angular.module('myApp', []);

app.controller("MessageListController", ['messages', function(messages) {
    this.messages = messages.list;
}]);

app.controller("MessagePostController", ['messages', function(messages) {
    var self = this;

    self.newMessage = 'Hello world!';

    this.addMessage = function(message) {
        messages.add(message);

        self.newMessage = '';
    };
}]);

app.factory('messages', function() {
    var messages = {};

    messages.list = [];

    messages.add = function(message) {
        messages.list.push({
            id: messages.list.length,
            text: message
        });
    };

    return messages;
});
