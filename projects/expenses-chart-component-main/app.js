const chart = document.querySelector(".chart");
const totalExpense = document.querySelector(".total")
// fetch and display data
const fetchData = async() => {
    try {
        const resp = await fetch("data.json");
        const data = await resp.json();
        // console.log()
        return data;
    } catch (error) {
        console.error("error loading json file", error)
    }
}

const displayChart = (expenses) => {
    let totalAmount = 0
    const weeklyExpenses = expenses
    .map((expense) => {
        const {day, amount} = expense;
        const heightVH = (25*amount)/100;
        totalAmount += amount;
        console.log(heightVH);
        return `<li>
        <span class="expense">$${amount}</span>
        <div class="amount" style="height: ${heightVH}vh"></div>
        ${day}
        </li>`
    }).join('');
    totalSetter(weeklyExpenses, totalAmount);
    // expense popup
    const expenseList = document.querySelectorAll(".expense");
    const amountList = document.querySelectorAll(".amount");
    amountList.forEach((list) => {
        list.addEventListener("mouseover", () => {
            removeClasses()
            list.previousElementSibling.classList.add("active");
        })
        list.addEventListener("mouseout", () => {
            removeClasses();
        })
    })
    function removeClasses() {
        amountList.forEach((list) => {
            list.previousElementSibling.classList.remove("active")
        })
    }
    console.log(expenseList);
}

function totalSetter (expenses, total) {
    chart.innerHTML = `${expenses}`;
    totalExpense.textContent = `$${total}`;
}
const start = async () => {
    const data = await fetchData();
    displayChart(data);
    console.log(data);
}

// console.log(totalExpense.textContent);

start();