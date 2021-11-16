export function isLocalStoraged(item) {
    return (
            (localStorage.getItem(item) == 'undefined')
        ||  (localStorage.getItem(item) == 'null')
        ||  (localStorage.getItem(item) == undefined)
        ||  (localStorage.getItem(item) == null)
        ) ? false : true;
}

export function getPageName() {
    return window.location.pathname;
}

export function toggleDiv(element) {
    element.classList.toggle("hidden");
}
  
export function changeVisibility(element, action) {
    if(action == "0") {
      element.classList.add("hidden");
    } else if (action == "1") {
      element.classList.remove("hidden");
    }
}
  
export function changeDisability(element, action) {
    if(action == "0") {
      element.setAttribute("disabled", true);
    } else if (action == "1") {
      element.setAttribute("disabled", false);
    }
}

export function convertMass (mass, unit) {
  if (unit == "lb") // Pounds
  {
    return mass / 2.204623;
  } else if (unit == "sl") // Slugs
  {
    return mass / 0.06852177;
  } else if (unit == "mp") // Planck's mass
  {
    return mass / 45940892.448;
  } else
    // Kilograms
  {
    return mass / 1;
}
}

export function convertHeight (height, unit) {
  if (unit == "ftin") // 1 ft = 30.48cm, 1 in = 2.54cm
  {
    return height / 30.48;
  } else if (unit == "mp") // Planck's mass
  {
    return height / (1.616049999 * Math.pow(10, -33));
  } else
    // Centimeters
  {
    return height / 1;
  }
}

export function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier; 
  }
