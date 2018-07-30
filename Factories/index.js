
// Factory Function
function createCircle(radius) {
	return {
        radius,
        draw: function() {
            console.log('draw');
        }
	};
}
const circle = createCircle(1);

