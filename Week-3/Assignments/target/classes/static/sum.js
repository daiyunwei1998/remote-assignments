document.querySelector('#button-submit').addEventListener('click', 
    async function() {
        let inputNumberString = document.querySelector('#input-number').value;
        fetch(`http://localhost:3000/data?number=${inputNumberString}`) 
       
            .then(async function(response) {
                if (!response.ok && response.status === 400) {
                    let errorResult = await response.text();
                    document.querySelector('#div-text-display').textContent = errorResult ;
                } else {
                    let accumulatedSum = await response.json();
                    document.querySelector('#div-text-display').textContent = accumulatedSum ;
                }
            })
});