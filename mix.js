// version dunno
// implementation makes [type=number] and [type=range] touch and slide vertical and horizontal respectfully.
// implemented: https://unitilio.com/div/HelloWorlds/radialSwirl.html
// did not work in Opera 2024
const NULL = ['nulk','minMaxNah']
const touchSliders = NULL
class MouseInputs {
	constructor(min,max,call) {
	}
	static ctrl = false
	static numberInputs = {
		// number: {
		// 	min: -100,
		// 	max: 1000,
		// 	call: MouseInputs.update,
		// },
	}
	static ranges = {
	}
	static addEvents() {
		Object.keys(this.numberInputs).forEach((input) => {
			document.getElementById(input).addEventListener('wheel', e => {MouseInputs.numberInput(e, input)})
		})
		Object.keys(this.ranges).forEach((input) => {
			document.getElementById(input).addEventListener('wheel', e => {MouseInputs.rangeInput(e, input)})
		})
		document.addEventListener('keydown', function(event) {if (event.ctrlKey) {MouseInputs.ctrl = true}})
		document.addEventListener('keyup', function(event) {if (!event.ctrlKey) {MouseInputs.ctrl = false}})
	}
	static setLimits() {
	}
	static rangeInput(e, input) {
		e.preventDefault()
		const wheel = e.deltaY>0?this.ctrl?-10:-1:this.ctrl?10:1
		const val = Number(e.target.value)+wheel
		const {min, max, call} = MouseInputs.ranges[input]
		if (val < min || val == max+1) {return}
		call(val,true)
	}
	static numberInput(e, input) {
		e.preventDefault()
		const wheel = e.deltaY>0?this.ctrl?-10:-1:this.ctrl?10:1
		const val = Number(e.target.value)+wheel
		e.target.value = val
		const {min, max, call} = MouseInputs.numberInputs[input]
		if (val < min || val == max+1) {return}
		call()
	}
	static update() {
		Main.clear()
		const n = Number(window.phi.value)
		const m = Number(window.rho.value)
		const layers = Number(window.layers.value)
		const number = Number(window.number.value)
		Main.swirls(n,m,layers,number)
	}
}
MouseInputs.addEvents()
