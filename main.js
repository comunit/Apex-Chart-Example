// Chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },

  series: [
    {
      name: "Population",
      data: [
        14916456,
        11126285,
        3204726,
        2098231,
        2027001,
        1970042,
        1871843,
        1734309,
        1009832,
        1001205
      ]
    }
  ],
  xaxis: {
    categories: [
      "Karachi",
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Gujranwala",
      "Peshawar",
      "Multan",
      "Hyderabad",
      "Islamabad",
      "Quetta"
    ]
  },

  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#f44336"]
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Largest Pakistani Cities By Population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

// init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// render chart
chart.render();

const button = document.querySelector("button");
// event method example
button.addEventListener("click", () => {
  if (button.textContent == "Horizontal") {
    button.innerText = "Vertical";
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: true
        }
      }
    });
  } else {
    button.innerText = "Horizontal";
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: false
        }
      }
    });
  }
});
