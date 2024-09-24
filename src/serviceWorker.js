// Define the public URL, adjusting to handle local and production environments
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}$/
      )
  );
  
  // Register the service worker
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // The URL of the service worker script
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // If the service worker's origin differs, don't register
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // This is running on localhost. Check if a service worker still exists or not.
          checkValidServiceWorker(swUrl, config);
  
          // Add some additional logging for local testing
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service worker in development.'
            );
          });
        } else {
          // Register the service worker for production
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // The updated content has been fetched in the background
                console.log('New content is available and will be used when all tabs are closed.');
                // Call the config callback if provided
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // The content is cached for offline use
                console.log('Content is cached for offline use.');
                // Call the config callback if provided
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If not, reload the page.
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // If the service worker exists, ensure it's valid
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No service worker found. Reload the page and unregister the old service worker.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found, proceed as normal.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
      });
  }
  
  // Unregister the service worker
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error('Error during service worker unregistration:', error);
        });
    }
  }
  
