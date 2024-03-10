async function sky(isDaytime) {
  // Extract relevant data
  // Convert epoch time to milliseconds

  if (isDaytime == 1) {
    return "day";
  } else {
    return "night";
  }
}
module.exports = sky;
