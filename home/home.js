


const getEvent= function(){

    fetch("https://striveschool-api.herokuapp.com/api/product/",{
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MTNhMzEzOWM0MzAwMTg4MTQ2NjQiLCJpYXQiOjE2OTcxOTI4NzgsImV4cCI6MTY5ODQwMjQ3OH0.bpGOplj1-QmaiAx52Q9p_qNyQmlo4DzZImsGgZWlmwU"
        }
        })
    .then((res =>{console.log("response ottenuta",res)
    if(res.ok){return res.json()} else{throw new Error("erroreee")}
    }))
    .then(events =>{console.log("eventi", events)})
    
    .catch((err => {console.log("si è verificato un errore", err)}))
    
    
    }
    
    getEvent()



const renderEvents = function (arrayOfEvents) {
    // riferimento alla riga
    const row = document.getElementById('row')
  
    arrayOfEvents.forEach((event) => {
      // ora qua creerò una col nel DOM per ogni evento!
      const newCol = document.createElement('div')
      newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
      
      newCol.innerHTML = `
      <div class="card my-3 border border-black border-3" id="card">
          <img src=${event.imageUrl} class="card-img-top" alt="racket picture" height="300px">
          <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <p class="card-text"> Prezzo: ${event.price} $</p>
              <a href="../details/details.html?eventId=${
                event._id
              }" class="btn btn-success border border-black border-2">Scopri di più</a>
              <button class="btn btn-secondary my-2 mx-2 border border-black border-2">Modifica</button>
              <button class="btn btn-danger border border-black border-2 delete"  >Delete</button>
          </div>
      </div>
      `
      row.appendChild(newCol)
    })
  }
  

  
  const getEvents = function () {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MTNhMzEzOWM0MzAwMTg4MTQ2NjQiLCJpYXQiOjE2OTcxOTI4NzgsImV4cCI6MTY5ODQwMjQ3OH0.bpGOplj1-QmaiAx52Q9p_qNyQmlo4DzZImsGgZWlmwU"
        }
        })
      .then((res) => {
        
        console.log('Response ottenuta dalla GET', res)
        if (res.ok) {
          
          return res.json()
        } else {
          throw new Error('Errore nel contattare il server')
        }
      })
      .then((events) => {
        console.log('EVENTS', events)
        // qua ora dovremmo creare delle cards per ogni evento ricevuto!
        // delego questo codice ad una funzione separata che chiamo renderEvents
        renderEvents(events)
      })
      .catch((err) => {
        
        console.log('Si è verificato un errore:', err)
      })
  }
  
  getEvents()


//   bottone eliminazione

const deleteButton=document.querySelectorAll(".delete")
console.log(typeof(deleteButton))

deleteButton.forEach((button)=>{

    button.addEventListener("click", function(e){
    e.preventDefault()
     button.parentElement.remove()
    
    alert('EVENTO ELIMINATO')
}
)
})







// deleteButton.addEventListener("click", deleteCard)

// const deleteCard = function () {
    
//     fetch('https://striveschool-api.herokuapp.com/api/product/', + eventId, {
//       method: 'DELETE',
//       headers: {
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MTNhMzEzOWM0MzAwMTg4MTQ2NjQiLCJpYXQiOjE2OTcxOTI4NzgsImV4cCI6MTY5ODQwMjQ3OH0.bpGOplj1-QmaiAx52Q9p_qNyQmlo4DzZImsGgZWlmwU"
//         }
//     })
//       .then((res) => {
//         if (res.ok) {

//           alert('EVENTO ELIMINATO')


//           return res.json()
//         } else {
//           alert("Problema con l'eliminazione dell'evento")
//           throw new Error('Errore nel DELETE')
//         }
//       })
//       .catch((err) => {
//         console.log('ERRORE!', err)
//       })
//   }
  
//   deleteCard()
