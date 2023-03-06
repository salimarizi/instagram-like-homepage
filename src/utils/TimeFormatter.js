const formatTime = (unix_timestamp) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const createdDate = new Date(unix_timestamp * 1000);
    const currentDate = new Date();

    const createdFullDate =
      createdDate.getDate() +
      " " +
      months[createdDate.getMonth()] +
      " " +
      createdDate.getFullYear();
    const currentFullDate =
      currentDate.getDate() +
      " " +
      months[currentDate.getMonth()] +
      " " +
      currentDate.getFullYear();

    if (createdFullDate !== currentFullDate) {
      return createdFullDate;
    }

    if (createdDate.getHours() !== currentDate.getHours()) {
      return currentDate.getHours() - createdDate.getHours() + " HOURS AGO";
    }

    return currentDate.getMinutes() - createdDate.getMinutes() + " MINUTES AGO";
  };

  export default formatTime;