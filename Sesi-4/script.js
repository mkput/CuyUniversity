function saklar(ruang, trigger, jumlahLampu){
  let toggle = document.getElementById(trigger)

  for (let i = 1; i <= jumlahLampu; i++) {
      let lamp = document.getElementById((ruang + '-lamp' + i))
      toggle.checked ? lamp.src = "assets/images/on.gif" : lamp.src = "assets/images/off.gif"
  }

}