import Stories from "../network/stories";
import { formattedDate, truncateText } from "../utils/index";
import CheckUserAuth from "./check-user-auth";

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();
    await this._initialData();
  },

  async _initialData() {
    try {
      const response = await Stories.getAll();
      const listStory = response.listStory;
      this._populateCardList(listStory);
    } catch (error) {
      console.error(error);
    }
  },

  _populateCardList(listStory = null) {
    if (!Array.isArray(listStory)) {
      throw new Error(
        `Parameter listStory should be an array. The value is ${listStory}`,
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
      <div class="col-md-6 col-lg-4 col-xl-4">
        <div class="card h-100 shadow-sm border-5">
          <img
            src="${card.photoUrl}"
            class="card-img-top w-100 img-fluid"
            alt="Story Image"
            style="height: 200px; object-fit: cover;"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-1">${card.name}</h5>
            <p class="text-muted small mb-1">
              ${formattedDate(card.createdAt)}
            </p>
            <p class="card-text">
              ${truncateText(card.description, 150)}
            </p>
            <a href="/detail-story.html?id=${card.id}" class="custom-btn mt-auto">Read More</a>
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
