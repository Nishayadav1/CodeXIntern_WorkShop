// const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '9182fd1b3fmsh2577a52306b66e9p1fa36djsn837f786d6735',
// 		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
// 	}
// };

// const btn=document.querySelector('#summarizeBtn')
// const summary=document.querySelector('#summaryText')

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const input =document.querySelector('#urlInput').value;
//     const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2
// `;

//     fetch(url, options)
//     .then(data=>data.json())
//     .then(data=>{
//         console.log(data.summary)

//         // summary.innerText=data?.summary
//     })
//     .catch(error=>{
//         console.log(error)
//     })
// })



const apiKey = '9182fd1b3fmsh2577a52306b66e9p1fa36djsn837f786d6735'; // Replace with your API Key

document.getElementById('summarizerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const articleUrl = document.getElementById('articleUrl').value;
  if (!articleUrl) {
    alert('Please enter a valid URL');
    return;
  }
  
  document.getElementById('summaryOutput').innerText = 'Loading...';
  
  summarizeArticle(articleUrl);
});

async function summarizeArticle(url) {
  try {
    const response = await fetch("https://api-url-summarizer.com/summarize", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com"
      },
      body: JSON.stringify({
        url: url,
        length: 3 // Define the length of the summary (short, medium, long)
      })
    });

    const data = await response.json();

    if (data.summary) {
      document.getElementById('summaryOutput').innerText = data.summary;
    } else {
      document.getElementById('summaryOutput').innerText = 'No summary found.';
    }
  } catch (error) {
    console.error('Error summarizing the article:', error);
    document.getElementById('summaryOutput').innerText = 'An error occurred while summarizing the article.';
  }
}






// fetch(url, options)

// .then((data)=>{
//     return data.json()
// })

// .then((data)=>{
//     console.log(data)
// })

// .catch((error)=>{
//     console.log(error)
// })


