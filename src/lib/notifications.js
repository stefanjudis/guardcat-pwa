import guardCat from 'guardcat'

let notifications

try {
  notifications = JSON.parse(localStorage.getItem('notifications'))
} catch (e) {
  notifications = []
}

export default {
  get () {
    return notifications
  },

  fetch (settings) {
    return guardCat.run(settings).then(newNotifications => {
      notifications.length = 0
      newNotifications.forEach(notification => {
        notifications.push({
          title: notification.subject.title,
          type: notification.subject.type,
          repo: notification.repository.full_name,
          url: notification.repository.url
        })
      })

      localStorage.setItem('notifications', JSON.stringify(notifications))
      return notifications
    })
  }
}
