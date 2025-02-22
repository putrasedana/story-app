import Stories from "../network/stories";
import { formattedDate } from "../utils";
import CheckUserAuth from "./check-user-auth";

const DetailStory = {
  async init() {
    CheckUserAuth.checkLoginState();
    await this._initialData();
  },

  async _initialData() {
    try {
      const params = new URLSearchParams(window.location.search);
      const storyId = params.get("id");

      if (!storyId) {
        throw new Error("Story ID is missing from the URL!");
      }

      const response = await Stories.getById(storyId);
      const story = response.story;
      this._populateDetailStory(story);
    } catch (error) {
      console.error(error);
    }
  },

  _populateDetailStory(story = null) {
    if (typeof story !== "object" || story === null) {
      throw new Error(
        `Parameter story should be an object. The value is ${story}`,
      );
    }
    const detailStory = document.querySelector("#detail-story");
    detailStory.innerHTML += this._templateDetailStory(story);
  },

  _templateDetailStory(story) {
    return `
      <div class="container my-5 w-75">
        <div class="card shadow-lg d-flex flex-column">
          <img
            src="${story.photoUrl}"
            class="w-75 mx-auto rounded-start"
            style="object-fit: contain; height: 400px; "
            alt="Story Image"
          />
          <div class="card-body w-100 p-xxl-5">
            <h3 class="card-title">${story.name}</h3>
            <p class="text-muted">${formattedDate(story.createdAt)}</p>
            <p class="card-text">${story.description}</p>
          </div>
        </div>
      </div>
    `;
  },
};

export default DetailStory;
