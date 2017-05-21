/** Написати функцію, яка приймає 1 аргумент - функцію-callback і запускає інтервал в 1 секунду, де викликається цей callback.
 call(function() {
		console.log("Called");
	}); <- викликається кожну секунду**/

function call (element) {
    setInterval(element, 1000);
}

call(function () {
    console.log("Called");
});