class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }
    clear(){
        this.previousOperand = " ";
        this.currentOperand = " ";
         this.operator = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.slice(0,-1)
    }
    appendNumber(number){
        if(number ==='.' && this.currentOperand.includes('.'))return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperator(operator){
       if(this.currentOperand === '') return
       if(this.previousOperand !== ''){
        this.calculate()
    }
        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        
    }
    calculate(){
      let computation
      const prev = parseFloat(this.previousOperand)
      const curr = parseFloat(this.currentOperand)
      if(isNaN(prev) || isNaN(curr)) return
      switch(this.operator){
          case '+':
          computation = prev + curr
          break
          case '-':
          computation = prev - curr
          break
          case '*':
          computation = prev * curr
          break
          case '/':
          computation = prev / curr
          break
          default:
          return
      } 
      this.currentOperand = computation
      this.operator = undefined
      this.previousOperand = '' 

    }
    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
        this.previousOperandText.innerText = this.previousOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equalTo]');
const allClear = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
       calculator.appendNumber(button.innerText)
       calculator.updateDisplay()
    })
})
operatorButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
       calculator.chooseOperator(button.innerText)
       calculator.updateDisplay()
    })
})
equals.addEventListener('click', button =>{
    calculator.calculate()
    calculator.updateDisplay()
})
allClear.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})