var app = angular.module('todoApp', []);
app.controller('todoCtrl', function ($scope) {
    $scope.taskList = [];
    $scope.taskAll = 0;
    $scope.taskCompleted = 0;

    $scope.sendTask = function () {
        $scope.taskList.push({
            name: $scope.task,
            completed: false
        });
        $scope.taskAll = $scope.taskList.length;
        $scope.task = '';
    }

    $scope.deleteTask = function (task) {
        $scope.taskList.splice($scope.taskList.indexOf(task), 1);
        $scope.taskAll = $scope.taskAll - 1;
    }

    $scope.completeTask = function (task) {
        var index = $scope.taskList.indexOf(task);
        if ($scope.taskList[index].completed) {
            $scope.taskList[index].completed = false;
            $scope.taskAll = $scope.taskAll + 1;
            $scope.taskCompleted = $scope.taskCompleted - 1;
        } else {
            $scope.taskList[index].completed = true;
            $scope.taskAll = $scope.taskAll - 1;
            $scope.taskCompleted++;
        }
    }

    $scope.clearAllTask = function () {
        $scope.taskList = [];
        $scope.taskAll = 0;
        $scope.taskCompleted = 0;
    }

    $scope.clearAllCompleted = function () {
        $scope.taskList = $scope.taskList.filter(tasklist => {
            return !tasklist.completed;
        });
        $scope.taskCompleted = 0;

    }
})