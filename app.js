const dataTitle = document.querySelectorAll('.dashboard-activity')
const dataCurrentTime = document.querySelectorAll('.time-spent')
const dataPreviousTime = document.querySelectorAll('.time-spent-description-time')
const periodMenu = document.querySelectorAll('.navigation-option')



const dataRequest = async () => {
    try {
        const URL = './data.json'
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data[3].timeframes)

        // Function that sets weekly period by default
        periodMenu.forEach((item, index) => {
            data.forEach((item, index) => {
                dataTitle[index].innerHTML = item.title
                dataCurrentTime[index].innerHTML = `${item.timeframes.weekly.current}hrs`
                dataPreviousTime[index].innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`
            });

            // Function that establishes period according to the item receives a click
            item.addEventListener('click', () => {
                if (index === 0) {
                    for (const menu of periodMenu) {
                        menu.classList.remove('active')
                    }
                    item.classList.add('active')
                    data.forEach((item, index) => {
                        dataTitle[index].innerHTML = item.title
                        dataCurrentTime[index].innerHTML = `${item.timeframes.daily.current}hrs`
                        dataPreviousTime[index].innerHTML = `Last Day - ${item.timeframes.daily.previous}hrs`
                    });
                }
                if (index === 1) {
                    for (const menu of periodMenu) {
                        menu.classList.remove('active')
                    }
                    item.classList.add('active')
                    data.forEach((item, index) => {
                        dataTitle[index].innerHTML = item.title
                        dataCurrentTime[index].innerHTML = `${item.timeframes.weekly.current}hrs`
                        dataPreviousTime[index].innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`
                    });
                }
                if (index === 2) {
                    for (const menu of periodMenu) {
                        menu.classList.remove('active')
                    }
                    item.classList.add('active')
                    data.forEach((item, index) => {
                        dataTitle[index].innerHTML = item.title
                        dataCurrentTime[index].innerHTML = `${item.timeframes.monthly.current}hrs`
                        dataPreviousTime[index].innerHTML = `Last Month - ${item.timeframes.monthly.previous}hrs`
                    });
                }
            })
        });

    } catch (error) {
        console.log(error)
    }
}

// Function call
dataRequest()