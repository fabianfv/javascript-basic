window.onload = () => {
  let operationViewer, resultViewer, buttonsWrapper
  const decimals = 2;

  function getHTMLElements() {
    operationViewer = document.querySelector(".operation-viewer")
    resultViewer = document.querySelector(".result-viewer")
    buttonsWrapper = document.querySelector(".buttons")
  }

  function initialize() {
    resultViewer.innerText = ""
    operationViewer.innerText = ""
    buttonsWrapper.onclick = process
  }

  const isOperator = (input) => ["%", "+", "-", "*", "/"].includes(input)

  const adjacentOperators = (input, prevInput) => isOperator(input) && isOperator(prevInput)

  function clearResult(input) {
    if (input !== "C") return false
    operationViewer.innerText = ""
    return true
  }

  function clearViewers(input) {
    if (input !== "AC") return false
    resultViewer.innerText = ""
    operationViewer.innerText = ""
    return true
  }

  const validOperation = (input, prevInput) => input === "=" && !isNaN(prevInput)

  function hasDecimals(result) {
    return result - Math.floor(result) > 0
  }

  function calculate(input, prevInput) {
    if (!validOperation(input, prevInput)) return false
    console.log("operation: ", operationViewer.innerText)
    const result = eval(operationViewer.innerText)
    resultViewer.innerText = hasDecimals(result) ? result.toFixed(decimals) : result
    return true
  }

  function process(e) {
    let input = e.target.innerText
    const currentOp = operationViewer.innerText
    const prevInput = currentOp[currentOp.length - 1]

    if (adjacentOperators(input, prevInput)) return
    if (clearResult(input)) return
    if (clearViewers(input)) return
    if (calculate(input, prevInput)) return
    
    operationViewer.innerText += input === "mod" ? "%" : input
  }

  getHTMLElements()
  initialize()
}
