const btnLeft = document.querySelector('[slider-btn-left]');
const btnRight = document.querySelector('[slider-btn-right]');
const sliderList = document.querySelector('[slider-list]');
const slidesQuantity = sliderList.children.length;

btnLeft.addEventListener('click', () => {
	slideLeft(sliderList.style.transform);
});
btnRight.addEventListener('click', () => {
	slideRight(sliderList.style.transform);
});

function slideLeft(transform) {
	if (transform.split('(')[1].split(')')[0] === '0px, 0px, 0px') return;

	sliderList.style.transform = `translate3d(${getTransformNumber(transform) + getTransformChange(sliderList) + getSliderListGap()}px, 0px, 0px)`;
};

function slideRight(transform) {
	const maxTransformChange = (-getTransformChange(sliderList) - getSliderListGap()) * (slidesQuantity - 1);

	if (getTransformNumber(transform) === maxTransformChange) return;

	sliderList.style.transform = `translate3d(${getTransformNumber(transform) - getTransformChange(sliderList) - getSliderListGap()}px, 0px, 0px)`;
}

function getTransformNumber(transform) {
	return Number(transform.split('(')[1].split(',')[0].split('p')[0]);
};

function getTransformChange(sliderList) {
	return sliderList.children[0].clientWidth;
}

function getSliderListGap() {
	return window.visualViewport.width < 768 ? 60 : window.visualViewport.width < 1024 ? 200 : 130;
}