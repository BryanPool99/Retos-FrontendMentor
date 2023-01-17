//console.log("Iniciando.....");
const datos = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
//selectores
const selDay = document.querySelector(".daily");
const selWeek = document.querySelector(".weekly");
const selMonth = document.querySelector(".monthly");
//-----------------------------------------
//uso de arreglos para los valores que cambiaran
const numC = document.querySelectorAll(".numC");
const numP = document.querySelectorAll(".numP");
const word = document.querySelectorAll(".word");
selDay.addEventListener("click", () => {
  //console.log("selecciono dia");
  for (let i = 0; i < datos.length; i++) {
    numC[i].innerHTML = datos[i].timeframes.daily.current;
    word[i].innerHTML = "Day";
    numP[i].innerHTML = datos[i].timeframes.daily.previous;
  
  }
  selDay.classList.add("active");
  selMonth.classList.remove("active");
  selWeek.classList.remove("active");
});

selWeek.addEventListener("click", () => {
  // console.log("selecciono semana");
  for (let i = 0; i < datos.length; i++) {
    numC[i].innerHTML = datos[i].timeframes.weekly.current;
    word[i].innerHTML = "Week";
    numP[i].innerHTML = datos[i].timeframes.weekly.previous;
  }
  selDay.classList.remove("active");
  selMonth.classList.remove("active");
  selWeek.classList.add("active");
});

selMonth.addEventListener("click", () => {
  //console.log("selecciono mes");
  for (let i = 0; i < datos.length; i++) {
    numC[i].innerHTML = datos[i].timeframes.monthly.current;
    word[i].innerHTML = "Month";
    numP[i].innerHTML = datos[i].timeframes.monthly.previous;
  }
  selDay.classList.remove("active");
  selMonth.classList.add("active");
  selWeek.classList.remove("active");
});
