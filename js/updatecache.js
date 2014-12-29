// Check if a new cache is available on page load.
// Borrowed from http://stackoverflow.com/a/13106972
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('Website updates are available. Do you want to reload this page?')) {
        window.location.reload();
      }
    } else {
      // Manifest has not changed. Nothing new to server.
    }
  }, false);

}, false);
