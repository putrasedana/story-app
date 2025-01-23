const Add = {
  async init() {
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
      false
    );
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log("formData");
      console.log(formData);

      // this._goToDashboardPage();
    }
  },

  _getFormData() {
    const nameInput = document.querySelector("#validationCustomRecordName");
    const descriptionInput = document.querySelector("#validationCustomNotes");
    const photoInput = document.querySelector("#validationCustomAmount");
    const createdAtInput = document.querySelector("#validationCustomAmount");

    return {
      name: nameInput.value,
      description: descriptionInput.value,
      photo: photoInput.files[0],
      createdAt: createdAtInput.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === ""
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = "/";
  },
};

export default Add;
