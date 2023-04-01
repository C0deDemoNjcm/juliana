/*const swapBtn = document.querySelector('#swap-btn')
const container = document.querySelector('#container')
const icons = document.querySelector('#icons')
let dark = JSON.parse(localStorage.getItem('animated-icons-darkmode')) || false
if (dark) {
	container.classList.add('dark')
	swapBtn.textContent = 'Switch to Light Mode'
	icons.style.setProperty('--rotation', 180)
}
swapBtn.addEventListener('click', () => {
	container.classList.toggle('dark')
	const rotation = parseInt(getComputedStyle(icons).getPropertyValue('--rotation'))
	icons.style.setProperty('--rotation', rotation - 180)
	dark = !dark
	if (dark) {
		swapBtn.textContent = 'Switch to Light Mode'
	} else {
		swapBtn.textContent = 'Switch to Dark Mode'
	}
	localStorage.setItem('animated-icons-darkmode', JSON.stringify(dark))
})*/
var typingEffect=new Typed(".multiText",{
        strings:["an upcoming ...","a coder,","a developer"," and","an entrepreneur"],
        loop:true,
        typeSpeed:100,
        backSpeed:80,
        backDelay:1500,
        });