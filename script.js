
// Simulierter Datenabruf (in Realität Firestore)
const siege = {
  "Tom": 5,
  "Ben": 3,
  "Lena": 7
};

const ctx = document.getElementById("gesamtChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: Object.keys(siege),
    datasets: [{
      label: "Siege insgesamt",
      data: Object.values(siege),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});
