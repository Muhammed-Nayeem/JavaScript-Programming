// load phones functionality:
const loadPhones = (searchPhoneText, dataLimit) => {
  fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchPhoneText}`
  )
    .then((res) => res.json())
    .then((data) => displayPhones(data.data, dataLimit));
};

// display phones functionality:
const displayPhones = (phones, dataLimit) => {
  // console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";

  //show all phones:
  const showAllContainer = document.getElementById("show-all-container");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAllContainer.classList.remove("d-none");
  } else {
    showAllContainer.classList.add("d-none");
  }

  //no phone found:
  const noPhoneFound = document.getElementById("no-phone-found");
  if (phones.length === 0) {
    noPhoneFound.classList.remove("d-none");
  } else {
    noPhoneFound.classList.add("d-none");
  }

  phones.forEach((phone) => {
    // console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("col-md-3");
    phoneCard.innerHTML = `
    <div class="card">
      <img src="${phone.image}" class="card-img-top" alt="${phone.brand}">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick=showPhoneDetails('${phone.slug}') class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Details</button>
      </div>
    </div>
    `;
    phonesContainer.appendChild(phoneCard);
  });

  //stop loader:
  toggleLoader(false);
};

//search process functionality:
const searchProcess = (dataLimit) => {
  //start loader:
  toggleLoader(true);
  let searchPhone = document.getElementById("search-phone");
  let searchPhoneText = searchPhone.value;
  //call the loadPhone function with the searchPhoneText argument:
  loadPhones(searchPhoneText, dataLimit);
};

// search phone functionality:
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  searchProcess(10);
});

//search field Enter key eventlistener:
document
  .getElementById("search-phone")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchProcess(10);
    }
  });

//loader or spinner functionality:
const toggleLoader = (isLoading) => {
  const loader = document.getElementById("loader");
  if (isLoading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
};

//show all button functionality:
const showAllBtn = document.getElementById("show-all-btn");
showAllBtn.addEventListener("click", function () {
  searchProcess();
});

//phone details functionality:
const showPhoneDetails = async(id) => {
  let url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  showDetailsModal(data.data);
};

const showDetailsModal = (phone) => {
  // console.log(phone);
  const modalContent = document.getElementById("modal-details");
  modalContent.innerHTML = `
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${phone.name}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>Release-Date: ${phone.releaseDate}</p>
    <p>Chipset: ${phone.mainFeatures.chipSet}</p>
    <p>Display-Size: ${phone.mainFeatures.displaySize}</p>
    <p>Memory: ${phone.mainFeatures.memory}</p>
    <p>Storage: ${phone.mainFeatures.storage}</p>
    <p>Sensors: ${phone.mainFeatures.sensors}</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
  `;
};

// loadPhones();
