import "../../../node_modules/chart.js/dist/Chart.min.js";
import { Chart } from "../../../node_modules/chart.js/dist/Chart.min.js";

(function(){
    const chartCanvas = document.getElementById('example-chart');
const data = JSON.parse(chartCanvas.parentElement.dataset.values);
const brandColor = (window.getComputedStyle(chartCanvas)).getPropertyValue("--color-brand");
const chart = new Chart(chartCanvas, {
    type: "line",
    data: {
        labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        datasets: [{
            label: "مبيعات الشهر",
            data: data,
            borderColor: brandColor,
            backgroundColor: "transparent",
            lineTension: 0.2
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: {
                display: false
            },
            xAxes: {
                position: "top"
            }
        }
    }
});

const navigation= document.querySelector(".c-table__navigation");
const randomArray= (mylenght, max) => Array.from({length: mylenght}, () => Math.round(Math.random()*max));
navigation.addEventListener("click", () => {
    chart.data.datasets[0].data= randomArray(12, 1200);
    chart.update();
})

})();