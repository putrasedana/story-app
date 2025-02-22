function formattedDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const toggleLoading = (show) => {
  const loadingIndicator = document.getElementById("loading");
  if (loadingIndicator) {
    loadingIndicator.style.display = show ? "block" : "none";
  }
};

export { formattedDate, truncateText, toggleLoading };
