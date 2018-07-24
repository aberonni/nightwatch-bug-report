module.exports.assertion = function() {
    this.message = 'message';
    this.expected = true;

    this.pass = function(value) {
        return value === this.expected;
    };

    this.value = function(result) {
        return result;
    };

    this.command = function(callback) {
        callback(true);
        return this;
    };
};
