module.exports = class myAccount {
    constructor(name) {
        this.name = name;
        this.money = 0;
    }

    credit(mon) {
        this.money += mon;
    }

    describe(){
        return "owner: " + this.name + ", balance: " + this.money;
    }
}