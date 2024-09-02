// iterateWithAsyncAwait.js

export async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    console.log(value);
  }
}

// Handling Errors with Async/Await
export async function awaitCall() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a successful response or an error
        Math.random() > 0.5 ? resolve("Fetched Data") : reject("API Error");
      }, 2000);
    });

    console.log(data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}

// Awaiting Concurrent Requests
export async function concurrentRequests() {
  const apiCall1 = new Promise((resolve) =>
    setTimeout(() => resolve("API Call 1 Response"), 2000)
  );
  const apiCall2 = new Promise((resolve) =>
    setTimeout(() => resolve("API Call 2 Response"), 3000)
  );

  try {
    const [response1, response2] = await Promise.all([apiCall1, apiCall2]);
    console.log("Combined Results:", response1, response2);
  } catch (error) {
    console.error("An error occurred while making concurrent requests:", error);
  }
}
