const endDate = "04 December 2023 6:30 PM";
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const second = document.querySelector("#second");

document.getElementById("end-date").innerText = endDate;

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;
  if (diff <= 0) {
    clearInterval(clockInterval);
  } else {
    const remainingDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);
    days.value = remainingDays;
    hours.value = remainingHours;
    minutes.value = remainingMinutes;
    second.value = remainingSeconds;
  }
};

const clockInterval = setInterval(clock, 1000);

clock();
