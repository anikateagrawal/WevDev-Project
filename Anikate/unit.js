var kinput = document.getElementById("kinput");
var kresult = document.getElementById("kresult");
var kinptype = document.getElementById("kinptype");
var krestype = document.getElementById("krestype");
var kivalue, krvalue;
kinput.addEventListener("keyup", func1);
kinptype.addEventListener("change", func1);
krestype.addEventListener("change", func1);
kivalue = kinptype.value;
krvalue = krestype.value;

function func1() {
  kivalue = kinptype.value;
  krvalue = krestype.value;

  if (kivalue == "ce" && krvalue == "fa") {
    kresult.value = (Number(kinput.value) * 9) / 5 + 32;
  } else if (kivalue == "ce" && krvalue == "ke") {
    kresult.value = Number(kinput.value) + 273.15;
  } else if (kivalue == "ce" && krvalue == "ce") {
    kresult.value = Number(kinput.value);
  }

  if (kivalue == "fa" && krvalue == "ce") {
    fah= ((Number(kinput.value) - 32) * 5) / 9;
    kresult.value =fah.toFixed(3);
  } else if (kivalue == "fa" && krvalue == "ke") {
    fah = ((Number(kinput.value) - 32) * 5) / 9 + 273.15;
    kresult.value =fah.toFixed(3);
  } else if (kivalue == "fa" && krvalue == "fa") {
    kresult.value = Number(kinput.value);
  }

  if (kivalue == "ke" && krvalue == "fa") {
    kresult.value = ((Number(kinput.value) - 273) * 9) / 5 + 32;
  } else if (kivalue == "ke" && krvalue == "ce") {
    kresult.value = Number(kinput.value) - 273.15;
  } else if (kivalue == "ke" && krvalue == "ke") {
    kresult.value = Number(kinput.value);
  }
}

var input = document.getElementById("input");
var result = document.getElementById("result");
var inptype = document.getElementById("inptype");
var restype = document.getElementById("restype");
var ivalue, rvalue;
input.addEventListener("keyup", funcc);
inptype.addEventListener("change", funcc);
restype.addEventListener("change", funcc);
ivalue = inptype.value;
rvalue = restype.value;

function funcc() {
  ivalue = inptype.value;
  rvalue = restype.value;

  if (ivalue == "Meter" && rvalue == "KiloMeter") {
    result.value = Number(input.value) * 0.001;
  } else if (ivalue == "Meter" && rvalue == "DeciMeter") {
    result.value = Number(input.value) * 10;
  } else if (ivalue == "Meter" && rvalue == "CentiMeter") {
    result.value = Number(input.value) * 100;
  } else if (ivalue == "Meter" && rvalue == "MilliMeter") {
    result.value = Number(input.value) * 1000;
  } else if (ivalue == "Meter" && rvalue == "Meter") {
    result.value = Number(input.value);
  }

  if (ivalue == "KiloMeter" && rvalue == "Meter") {
    result.value = Number(input.value) * 1000;
  } else if (ivalue == "KiloMeter" && rvalue == "DeciMeter") {
    result.value = Number(input.value) * 10000;
  } else if (ivalue == "KiloMeter" && rvalue == "CentiMeter") {
    result.value = Number(input.value) * 100000;
  } else if (ivalue == "KiloMeter" && rvalue == "MilliMeter") {
    result.value = Number(input.value) * 1000000;
  } else if (ivalue == "KiloMeter" && rvalue == "KiloMeter") {
    result.value = Number(input.value);
  }

  if (ivalue == "DeciMeter" && rvalue == "KiloMeter") {
    result.value = Number(input.value) * 0.0001;
  } else if (ivalue == "DeciMeter" && rvalue == "Meter") {
    result.value = Number(input.value) * 0.1;
  } else if (ivalue == "DeciMeter" && rvalue == "CentiMeter") {
    result.value = Number(input.value) * 10;
  } else if (ivalue == "DeciMeter" && rvalue == "MilliMeter") {
    result.value = Number(input.value) * 100;
  } else if (ivalue == "DeciMeter" && rvalue == "DeciMeter") {
    result.value = Number(input.value);
  }

  if (ivalue == "CentiMeter" && rvalue == "KiloMeter") {
    result.value = Number(input.value) * 0.00001;
  } else if (ivalue == "CentiMeter" && rvalue == "DeciMeter") {
    result.value = Number(input.value) * 0.1;
  } else if (ivalue == "CentiMeter" && rvalue == "Meter") {
    result.value = Number(input.value) * 0.01;
  } else if (ivalue == "CentiMeter" && rvalue == "MilliMeter") {
    result.value = Number(input.value) * 10;
  } else if (ivalue == "CentiMeter" && rvalue == "CentiMeter") {
    result.value = Number(input.value);
  }

  if (ivalue == "MilliMeter" && rvalue == "KiloMeter") {
    result.value = Number(input.value) * 0.000001;
  } else if (ivalue == "MilliMeter" && rvalue == "DeciMeter") {
    result.value = Number(input.value) * 0.01;
  } else if (ivalue == "MilliMeter" && rvalue == "CentiMeter") {
    result.value = Number(input.value) * 0.1;
  } else if (ivalue == "MilliMeter" && rvalue == "Meter") {
    result.value = Number(input.value) * 0001;
  } else if (ivalue == "MilliMeter" && rvalue == "MilliMeter") {
    result.value = Number(input.value);
  }
}

var winput = document.getElementById("wtinput");
var wresult = document.getElementById("wtresult");
var winptype = document.getElementById("winptype");
var wrestype = document.getElementById("wrestype");
var wivalue, wrvalue;
winput.addEventListener("keyup", func2);
winptype.addEventListener("change", func2);
wrestype.addEventListener("change", func2);
wivalue = winptype.value;
wrvalue = wrestype.value;

function func2() {
  wivalue = winptype.value;
  wrvalue = wrestype.value;

  if (wivalue == "kg" && wrvalue == "g") {
    wresult.value = Number(winput.value) * 1000;
  } else if (wivalue == "kg" && wrvalue == "t") {
    wresult.value = Number(winput.value) * 0.001;
  } else if (wivalue == "kg" && wrvalue == "p") {
    wresult.value = Number(winput.value) * 2.205;
  } else if (wivalue == "kg" && wrvalue == "o") {
    wresult.value = Number(winput.value) * 35.274;
  } else if (wivalue == "kg" && wrvalue == "kg") {
    wresult.value = Number(winput.value);
  }

  if (wivalue == "g" && wrvalue == "kg") {
    wresult.value = Number(winput.value) * 0.001;
  } else if (wivalue == "g" && wrvalue == "t") {
    wresult.value = Number(winput.value) * 0.000001;
  } else if (wivalue == "g" && wrvalue == "p") {
    wresult.value = Number(winput.value) * 0.002204;
  } else if (wivalue == "g" && wrvalue == "o") {
    wresult.value = Number(winput.value) * 0.035274;
  } else if (wivalue == "g" && wrvalue == "g") {
    wresult.value = Number(winput.value);
  }

  if (wivalue == "t" && wrvalue == "g") {
    wresult.value = Number(winput.value) * 1000000;
  } else if (wivalue == "t" && wrvalue == "kg") {
    wresult.value = Number(winput.value) * 1000;
  } else if (wivalue == "t" && wrvalue == "p") {
    wresult.value = Number(winput.value) * 2204.62;
  } else if (wivalue == "t" && wrvalue == "o") {
    wresult.value = Number(winput.value) * 35274;
  } else if (wivalue == "t" && wrvalue == "t") {
    wresult.value = Number(winput.value);
  }

  if (wivalue == "p" && wrvalue == "g") {
    wresult.value = Number(winput.value) * 453.592;
  } else if (wivalue == "p" && wrvalue == "t") {
    wresult.value = Number(winput.value) * 0.00045;
  } else if (wivalue == "p" && wrvalue == "kg") {
    wresult.value = Number(winput.value) * 0.4536;
  } else if (wivalue == "p" && wrvalue == "o") {
    wresult.value = Number(winput.value) * 16;
  } else if (wivalue == "p" && wrvalue == "p") {
    wresult.value = Number(winput.value);
  }

  if (wivalue == "o" && wrvalue == "g") {
    wresult.value = Number(winput.value) * 28.35;
  } else if (wivalue == "o" && wrvalue == "t") {
    wresult.value = Number(winput.value) * 0.000028;
  } else if (wivalue == "o" && wrvalue == "p") {
    wresult.value = Number(winput.value) * 0.0625;
  } else if (wivalue == "o" && wrvalue == "kg") {
    wresult.value = Number(winput.value) * 0.02834;
  } else if (wivalue == "o" && wrvalue == "o") {
    wresult.value = Number(winput.value);
  }
}

var tinput = document.getElementById("tinput");
var tresult = document.getElementById("tresult");
var tinptype = document.getElementById("tinptype");
var trestype = document.getElementById("trestype");
var tivalue, trvalue;
tinput.addEventListener("keyup", func);
tinptype.addEventListener("change", func);
trestype.addEventListener("change", func);
tivalue = tinptype.value;
trvalue = trestype.value;

function func() {
  tivalue = tinptype.value;
  trvalue = trestype.value;

  if (tivalue == "s" && trvalue == "m") {
     fr=Number(tinput.value) / 60;
     tresult.value =fr.toFixed(2);
  } else if (tivalue == "s" && trvalue == "h") {
    fr= Number(tinput.value) / 3600;
    tresult.value =fr.toFixed(4);
  } else if (tivalue == "s" && trvalue == "d") {
    fr = Number(tinput.value) / 86400;
    tresult.value =fr.toFixed(6);
  } else if (tivalue == "s" && trvalue == "w") {
    fr = Number(tinput.value) / 604800;
    tresult.value =fr.toFixed(7);
  } else if (tivalue == "s" && trvalue == "y") {
    fr = Number(tinput.value) / 31536000;
    tresult.value =fr.toFixed(8);
  } else if (tivalue == "s" && trvalue == "s") {
    tresult.value = Number(tinput.value);
  }

  if (tivalue == "m" && trvalue == "s") {
    tresult.value = Number(tinput.value) * 60;
  } else if (tivalue == "m" && trvalue == "h") {
     mn= Number(tinput.value) / 60;
     tresult.value=mn.toFixed(3);
  } else if (tivalue == "m" && trvalue == "d") {
    mn = Number(tinput.value) / 1440;
    tresult.value=mn.toFixed(4);
  } else if (tivalue == "m" && trvalue == "w") {
    mn = Number(tinput.value) / 10080;
    tresult.value=mn.toFixed(5);
  } else if (tivalue == "m" && trvalue == "y") {
    mn = Number(tinput.value) / 525600;
    tresult.value=mn.toFixed(6);
  } else if (tivalue == "m" && trvalue == "m") {
    tresult.value = Number(tinput.value);
  }

  if (tivalue == "h" && trvalue == "m") {
    tresult.value = Number(tinput.value) * 60;
  } else if (tivalue == "h" && trvalue == "s") {
    tresult.value = Number(tinput.value) * 3600;
  } else if (tivalue == "h" && trvalue == "d") {
    dr = Number(tinput.value) / 24;
    tresult.value=dr.toFixed(3);
  } else if (tivalue == "h" && trvalue == "w") {
    dr = Number(tinput.value) / 168;
    tresult.value=dr.toFixed(4);
  } else if (tivalue == "h" && trvalue == "y") {
    dr = Number(tinput.value) / 8760;
    tresult.value=dr.toFixed(5);
  } else if (tivalue == "h" && trvalue == "h") {
    tresult.value = Number(tinput.value);
  }

  if (tivalue == "d" && trvalue == "m") {
    tresult.value = Number(tinput.value) * 1440;
  } else if (tivalue == "d" && trvalue == "h") {
    tresult.value = Number(tinput.value) * 24;
  } else if (tivalue == "d" && trvalue == "s") {
    tresult.value = Number(tinput.value) * 86400;
  } else if (tivalue == "d" && trvalue == "w") {
    hrr = Number(tinput.value) / 7;
    tresult.value=hrr.toFixed(3);
  } else if (tivalue == "d" && trvalue == "y") {
    hrr = Number(tinput.value) / 365;
    tresult.value=hrr.toFixed(4);
  } else if (tivalue == "d" && trvalue == "d") {
    tresult.value = Number(tinput.value);
  }

  if (tivalue == "w" && trvalue == "m") {
    tresult.value = Number(tinput.value) * 10080;
  } else if (tivalue == "w" && trvalue == "h") {
    tresult.value = Number(tinput.value) * 168;
  } else if (tivalue == "w" && trvalue == "d") {
    tresult.value = Number(tinput.value) * 7;
  } else if (tivalue == "w" && trvalue == "s") {
    tresult.value = Number(tinput.value) * 604800;
  } else if (tivalue == "w" && trvalue == "y") {
    wk = Number(tinput.value) / 52;
    tresult.value=wk.toFixed(3);
  } else if (tivalue == "w" && trvalue == "w") {
    tresult.value = Number(tinput.value);
  }

  if (tivalue == "y" && trvalue == "m") {
    tresult.value = Number(tinput.value) * 525600;
  } else if (tivalue == "y" && trvalue == "h") {
    tresult.value = Number(tinput.value) * 8760;
  } else if (tivalue == "y" && trvalue == "d") {
    tresult.value = Number(tinput.value) * 365;
  } else if (tivalue == "y" && trvalue == "w") {
    tresult.value = Number(tinput.value) * 52;
  } else if (tivalue == "y" && trvalue == "s") {
    tresult.value = Number(tinput.value) * 31536000;
  } else if (tivalue == "y" && trvalue == "y") {
    tresult.value = Number(tinput.value);
  }
}
