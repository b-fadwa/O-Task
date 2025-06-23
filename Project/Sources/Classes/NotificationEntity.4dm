Class extends Entity

exposed function readNotification()
	this.isRead := true
	this.save()

exposed function unreadNotification()
	this.isRead := false
	this.save()