self.addEventListener('push', function(event) {
    const options = {
      body: 'This is a periodic notification',
      icon: 'path_to_icon.png',
    };
    event.waitUntil(
      self.registration.showNotification('Hello User!', options)
    );
  });
  