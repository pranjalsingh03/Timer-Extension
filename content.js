function addTimeDisplay() {
    let timeElement = document.getElementById('time-display-extension');
    if (!timeElement) {
        timeElement = document.createElement('div');
        timeElement.id = 'time-display-extension';
        timeElement.style.position = 'fixed';
        timeElement.style.top = '10px';
        timeElement.style.right = '10px';
        timeElement.style.backgroundColor = '#ffffff';
        timeElement.style.padding = '5px 10px';
        timeElement.style.border = '1px solid #cccccc';
        timeElement.style.borderRadius = '5px';
        timeElement.style.fontSize = '14px';
        //   timeElement.style.zIndex = '9999';
        document.body.appendChild(timeElement);
    }
    return timeElement;
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const timeElement = addTimeDisplay();
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

setInterval(updateTime, 1000);
