
function elimination(eliminate) {
    let result = []
        for (let i = 0; i < x.length; i++) {
        if (eliminate[i] < 0) {
            result.push(0);
        } else {
            result.push(eliminate[i]);
        }
    }
    console.log(result);
}
let x = [2, -1, 4, -3];
elimination(x);

