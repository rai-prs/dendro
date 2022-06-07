

function clickButton(target) {
  let result = document.getElementById("result")
  let operator = document.getElementsByClassName("cul")
  let target_value = target.innerHTML;
  let result_value = result.innerHTML.slice(-1)
  
  if (target_value == "AC") {
    result.innerHTML = "0"
  } else if (target_value == "="){
    result.innerHTML = eval(result.innerHTML);
  } else if (result.innerHTML == "0" && (target_value == "+" || target_value == "-" || target_value == "*" || target_value == "/" || target_value == "." || target_value == "0")) {
      result.innerHTML = "0"
  } else if ((result_value == "+" || result_value == "-" || result_value == "*" || result_value == "/" || result_value == "." ) && (target_value == "+" || target_value == "-" || target_value =="*" || target_value =="/" || target_value == ".")) {
                 result.innerHTML == "0"
  }  else {
            if (result.innerHTML == "0") {
              result.innerHTML = target_value
            } else {
              result.innerHTML += target_value
              
            }
    }
}

