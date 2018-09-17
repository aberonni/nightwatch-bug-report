exports.command = function(selector) {
  this.execute(
    function(data) {
      return data;
    },
    [selector],
    function(result) {
      console.log(result);
    }
  );
  return this;
};
