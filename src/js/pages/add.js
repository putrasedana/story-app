import Stories from "../network/stories";
import { toggleLoading } from "../utils";
import CheckUserAuth from "./check-user-auth";

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const addStoryForm = document.querySelector("#addStoryForm");
    addStoryForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addStoryForm.classList.add("was-validated");
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (!this._validateFormData({ ...formData })) {
      console.log("formData");
      console.log(formData);
      this._goToDashboardPage();
    }

    try {
      toggleLoading(true);
      await Stories.store({
        description: formData.description,
        photo: formData.photo,
      });
      this._goToDashboardPage();
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to add story. Please try again.";
      window.alert(errorMessage);
    } finally {
      toggleLoading(false);
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector(
      "#validationCustomDescription",
    );
    const photoInput = document.querySelector("#validationCustomImage");

    return {
      description: descriptionInput.value,
      photo: photoInput.files[0],
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === "",
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = "/";
  },
};

export default Add;
