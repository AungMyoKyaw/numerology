function nameNumerology(str) {
    var alphabet = /[A-z]/g;
    var str = str.match(alphabet);
    var ans = 0;
    var start = 64;
    // console.log(str);
    str.forEach(function(element) {
        var toans = (element.toUpperCase().charCodeAt(0) - start) % 9;
        if (toans !== 0) {
            ans += toans;
            // console.log(element," ",toans);
        } else {
            ans += 9;
        }
        // console.log(ans);
        // console.log(toans);
    });

    function numberbaydin(num) {
        //Aung Myo Kyaw
        function numsplitreduce(a, b) {
            return Number(a) + Number(b);
        }
        var numsplit = num.toString().split("");
        var sum = numsplit.reduce(numsplitreduce);
        //console.log(sum);
        while (sum > 9) {
            numsplit = sum.toString().split("");
            sum = numsplit.reduce(numsplitreduce);
        }
        //console.log(sum);
        return sum;
    }
    // console.log(numberbaydin(99));
    return numberbaydin(ans);
}
