window.onload = function () {
  const panel = document.getElementById('panel');
  const btnShuffle = document.getElementById('btnShuffle');
  const btnSort = document.getElementById('btnSort');

  const shuffle = (items) => {
    const sliced = items.slice(0);
    let arrayNumLength = sliced.length;
    while (--arrayNumLength) {
      const random = Math.floor(arrayNumLength * Math.random());
      const temp = sliced[random];
      sliced[random] = sliced[arrayNumLength];
      sliced[arrayNumLength] = temp;
    }
    return sliced;
  };
  btnShuffle.onclick = () => {
    let nodes = panel.children;
    let i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      panel.appendChild(nodes[i]);
      ++i;
    }
  };

  btnSort.onclick = () => {
    let counter;
    let shouldSwitch = true;
    let switching = true;
    while (switching) {
      switching = false;
      let liElements = panel.getElementsByTagName('li');
      for (counter = 0; counter < liElements.length - 1; counter++) {
        shouldSwitch = false;
        if (
          liElements[counter].innerHTML.toLowerCase() >
          liElements[counter + 1].innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        liElements[counter].parentNode.insertBefore(
          liElements[counter + 1],
          liElements[counter]
        );
        switching = true;
      }
    }
  };
};
