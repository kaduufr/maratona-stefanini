(function () {
    "use strict"

    const app = angular.module('app', [])
    app.controller('ListController', listController)

    function listController($scope) {

        let vm = this

        vm.todoList = [
            { text: 'Tarefa 1', done: false },
            { text: 'Tarefa 2', done: true },
            { text: 'Tarefa 3', done: true },
        ]

        vm.addTodo = addTodo
        vm.removeTodo = removeTodo
        vm.todoDone = getAllDoneToDo
        vm.archiveTodo = archiveTodos

        function addTodo() {
            vm.todoList.push({
                text: vm.textToDo,
                done: false
            })

            vm.textToDo = ''
        }
        function archiveTodos() {
            let undone = vm.todoList.filter(todo => !todo.done)
            return undone
        }
        function removeTodo(todo) {
            const getIndex = vm.todoList.indexOf(todo)
            vm.todoList.splice(getIndex, 1)
        }

        function getAllDoneToDo() {
            let done = vm.todoList.filter(todo => todo.done)
            return done.length
        }
    }
})()