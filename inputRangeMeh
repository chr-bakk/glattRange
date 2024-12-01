// html>body>input min="nah" max="1000"

class InputGestures {
	constructor(min,max,call) {
	}
	static ctrl = false
	static touchActive = {}
	static numberInputs = {
		phi: {
			min: -100,
			max: 1000,
			call: InputGestures.update,
		},
	}
	static ranges = {
		// number: {min: -100,max: 1000,call: InputGestures.update},
	}
	static touchStart(e) {
		const val = Number(e.target.value)
		this.touchActive.startVal = val
		this.touchActive.y = e.touches[0].clientY
		this.touchActive.currentVal = val
	}
	static touchMove(e, input) {
		e.preventDefault()
		if (!this.touchActive.y) return
		const newVal = this.touchActive.startVal + Math.round((this.touchActive.y - e.touches[0].clientY)/10)
		e.target.value = Number(newVal)
		if (newVal == this.touchActive.currentVal) return
		this.touchActive.currentVal = newVal
		InputGestures.numberInputs[input].call()
	}
	static touchEnd() {
		this.touchActive = {}
	}
	static addEvents() {
		Object.keys(this.numberInputs).forEach((input) => {
			document.getElementById(input).addEventListener('wheel', e => {InputGestures.numberInput(e, input)})
			document.getElementById(input).addEventListener('touchstart', e => {InputGestures.touchStart(e)})
			document.getElementById(input).addEventListener('touchmove', e => {InputGestures.touchMove(e, input)})
			document.getElementById(input).addEventListener('touchend', e => {InputGestures.touchEnd()})
		})
		Object.keys(this.ranges).forEach((input) => {
			document.getElementById(input).addEventListener('wheel', e => {InputGestures.rangeInput(e, input)})
		})
		document.addEventListener('keydown', (event) => {if (event.ctrlKey) {InputGestures.ctrl = true}})
		document.addEventListener('keyup', (event) => {if (!event.ctrlKey) {InputGestures.ctrl = false}})
	}
	static setLimits() {
	}
	static rangeInput(e, input) {
		e.preventDefault()
		const wheel = e.deltaY>0?this.ctrl?-10:-1:this.ctrl?10:1
		const val = Number(e.target.value)+wheel
		const {min, max, call} = InputGestures.ranges[input]
		if (val < min || val == max+1) {return}
		call(val,true)
	}
	static numberInput(e, input) {
		e.preventDefault()
		const wheel = e.deltaY>0?this.ctrl?-10:-1:this.ctrl?10:1
		const val = Number(e.target.value)+wheel
		e.target.value = val
		const {min, max, call} = InputGestures.numberInputs[input]
		if (val < min || val == max+1) {return}
		call()
	}
	static update() {
		Main.clear()
		const phi = Number(window.phi.value)
		Main.swirls(phi)
	}
}
InputGestures.addEvents()
