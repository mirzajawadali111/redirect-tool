// URL: example.netlify.app/?user=mirzajawad
fetch("users.json")
  .then(res => res.json())
  .then(users => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("user");

    if (username && users[username]) {
      window.location.href = users[username];
    } else {
      document.body.innerHTML = "<h1>Link not found</h1>";
    }
  })
  .catch(err => {
    console.error("Failed to load", err);
    document.body.innerHTML = "<h1>Error loading redirects</h1>";
  });
