



const submitButton = document.getElementById('form')

submitButton.addEventListener('submit', function (e) {
  e.preventDefault() 
  console.log("invio i dati all'API")

  const nameInput = document.getElementById('nameRacket')
  const descriptionInput = document.getElementById('descriptionRacket')
  const brandInput = document.getElementById('brandRacket')
  const imageInput = document.getElementById('imageRacket')
  const priceInput = document.getElementById('priceRacket')
  


  const newEvent = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
    price: priceInput.value,
    
  }

  console.log("oggetto API", newEvent)


  const makeOrder= function(){

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: 'POST', 
    body: JSON.stringify(newEvent), 
    headers: {
      
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MTNhMzEzOWM0MzAwMTg4MTQ2NjQiLCJpYXQiOjE2OTcxOTI4NzgsImV4cCI6MTY5ODQwMjQ3OH0.bpGOplj1-QmaiAx52Q9p_qNyQmlo4DzZImsGgZWlmwU",
      'Content-Type': 'application/json'
      
    },
  })
    .then((res) => {
      
      if (res.ok) {
        
        alert("...WE'RE SEARCHING THE BEST PRODUCTS FOR YOU...")

        return res.json()
       

      } else {
        alert("ERROR NAVIGATION")
        throw new Error('ERROR IN THE FORM')
      }
    })
    .then((events) =>{console.log("events", events)})
    .catch((err) => {
      console.log('ERROR:', err)
    })
}
makeOrder()
})