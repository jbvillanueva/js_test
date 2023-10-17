
function fetchData() {
    const apiUrl = 'https://3e3a8209x4.execute-api.ap-southeast-1.amazonaws.com/demo/api/list-product-plan';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const dataDisplay = document.getElementById('data-display');
        dataDisplay.innerText = `Title: ${data.title}\nBody: ${data.body}`;
        console.log("data",console);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  window.addEventListener('load', fetchData);