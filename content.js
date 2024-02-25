function addTimeDisplay() {
    let timeElement = document.getElementById('time-display-extension');
    if (!timeElement) {
        timeElement = document.createElement('div');
        timeElement.id = 'time-display-extension';
        timeElement.style.position = 'fixed';
        timeElement.style.top = '10px';
        timeElement.style.right = '10px';
        timeElement.style.color = '#ffffff';
        timeElement.style.backgroundColor = '#000000';
        timeElement.style.padding = '5px 10px';
        timeElement.style.opacity = '0.8';
        timeElement.style.border = '1px solid #cccccc';
        timeElement.style.borderRadius = '5px';
        timeElement.style.fontSize = '14px';
        timeElement.style.zIndex = '9999';
        document.body.appendChild(timeElement);
        let isDragging = false;
        let offsetX, offsetY;
    
        timeElement.addEventListener('mousedown', function(e) {
          isDragging = true;
          offsetX = e.clientX - parseInt(timeElement.style.right);
          offsetY = e.clientY - parseInt(timeElement.style.top);
        });
    
        document.addEventListener('mousemove', function(e) {
          if (isDragging) {
            timeElement.style.right = `${window.innerWidth - e.clientX + offsetX}px`;
            timeElement.style.top = `${e.clientY - offsetY}px`;
          }
        });
    
        document.addEventListener('mouseup', function() {
          isDragging = false;
        });
    
        document.body.appendChild(timeElement);
      }
      return timeElement;
    }
//     }
//     return timeElement;
// }



function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const timeElement = addTimeDisplay();
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

setInterval(updateTime, 1000); // Update time every second
