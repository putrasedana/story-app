import { formattedDate, truncateText } from "../../utils";

const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    try {
      const fetchRecords = await fetch(
        "https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json"
      );

      if (!fetchRecords.ok) {
        throw new Error(`HTTP error! status: ${fetchRecords.status}`);
      }

      const responseRecords = await fetchRecords.json();
      this._listStory = responseRecords.listStory;

      this._populateCardList(this._listStory);
    } catch (error) {
      alert(`Failed to fetch data: ${error.message}`);
      console.error("Error fetching data:", error);
    }
  },

  _populateCardList(listStory = null) {
    if (!Array.isArray(listStory)) {
      throw new Error(
        `Parameter listStory should be an array. The value is ${listStory}`
      );
    }
    const cardList = document.querySelector("#cardList");
    cardList.innerHTML = "";
    if (listStory.length <= 0) {
      cardList.innerHTML = this._templateEmptyCardItem();
      return;
    }
    listStory.forEach((card) => {
      cardList.innerHTML += this._templateCardItem(card);
    });
  },

  _templateCardItem(card) {
    return `
      <div class="col-md-6 col-lg-3">
        <div class="card">
          <img
            src="${card.photoUrl}"
            class="card-img-top"
            alt="Story Image"
          />
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="text-muted small">
              ${formattedDate(card.createdAt)}
            </p>
            <p class="card-text">
              ${truncateText(card.description, 120)}
            </p>
            <a href="#" class="card-btn">Read More</a>
          </div>
        </div>
      </div>
    `;
  },

  _templateEmptyCardItem() {
    return `
      <div class="text-center">Tidak ada story</div>
    `;
  },
};

export default Dashboard;
