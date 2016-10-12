function counter() {
    var currentCOunter = 1;

        return function() {
            return currentCount++;
        }
};;