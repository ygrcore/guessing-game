class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.midValue = Math.round(((this.maxValue - this.minValue)/ 2) + this.minValue);
        return this.midValue;
    }

    lower() {
        this.setRange(this.minValue, this.midValue)
    }

    greater() {
        this.setRange(this.midValue, this.maxValue)

    }
}

module.exports = GuessingGame;
