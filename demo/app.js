document.getElementById("summarizerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const url = document.getElementById("url").value;
    const summaryText = document.getElementById("summaryText");
    const resultDiv = document.getElementById("result");

    // Clear previous summary
    summaryText.innerText = '';

    // Fetch the summary from the API
    try {
        const response = await fetch('https://example-api.p.rapidapi.com/summarize', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
                'X-RapidAPI-Host': 'example-api.p.rapidapi.com' // Replace with API host
            },
            body: JSON.stringify({
                url: url,
                length: 3 // Choose the summary length
            })
        });

        const data = await response.json();

        if (data.summary) {
            summaryText.innerText = data.summary;
            resultDiv.style.display = 'block';
        } else {
            summaryText.innerText = 'Failed to summarize the article. Please try again.';
        }

    } catch (error) {
        summaryText.innerText = 'Error fetching summary. Please check the URL or try again later.';
        resultDiv.style.display = 'block';
    }
});
