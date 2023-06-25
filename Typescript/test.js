var isEven = false;
var num = 4;
var str = "";
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.firstName;
    };
    return AnotherUserClass;
}());
var peshoUser = {
    name: "Pesho",
    age: 21,
};
var anotherUserList = [
    {
        firstName: 'Ivan',
        id: 1
    },
    {
        firstName: 'Mitko',
        id: 2
    },
    {
        firstName: 'Maria',
        id: 3
    }
];
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    console.log("".concat(id, ": ").concat(firstName));
});
