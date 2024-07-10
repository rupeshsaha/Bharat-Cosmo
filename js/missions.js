
document.addEventListener("DOMContentLoaded", () => {





    const container = document.querySelector(".container");
  
    // Array of card data objects
    const cardData = [
      {
        imageUrl: '/img/1.jpg',
        title: 'Chandrayaan 3',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore autem voluptatum consequuntur.',
        year: 'YEAR: 2023',
        application: 'Lunar'
      },
      {
        imageUrl: '/img/2.jpg',
        title: 'Artemis',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam excepturi, quas non maiores doloribus deleniti.',
        year: 'YEAR: 2024',
        application: 'Lunar'
      },
      // Add more card data objects as needed
    ];
  
    // Function to create a single card
    function createCard(cardData) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("div");
      image.classList.add("card-img");
      image.style.backgroundImage = `url("${cardData.imageUrl}")`;
      card.appendChild(image);
  
      const title = document.createElement("div");
      title.classList.add("card-title");
      title.innerText = cardData.title;
      card.appendChild(title);
  
      const info = document.createElement("div");
      info.classList.add("card-info");
      info.innerText = cardData.info;
      card.appendChild(info);
  
      const year = document.createElement("div");
      year.classList.add("card-year");
      year.innerText = cardData.year;
      card.appendChild(year);
  
      const application = document.createElement("div");
      application.classList.add("card-app");
      application.innerText = cardData.application;
      card.appendChild(application);
  
      return card;
    }
  
    // Function to load all cards
    function loadCards() {
      cardData.forEach(data => {
        const card = createCard(data);
        container.appendChild(card);
      });
    }
  
    // Call loadCards to generate cards on DOMContentLoaded
    loadCards();
  });
  