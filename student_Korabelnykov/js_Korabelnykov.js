function counter() {
    var currentCounter = 1;

        return function() {
            return currentCount++;
        }
}