Class extends Entity

//reads/unreads a notification
exposed Function readNotification()
	This:C1470.isRead:=True:C214
	This:C1470.save()
	
exposed Function unreadNotification()
	This:C1470.isRead:=False:C215
	This:C1470.save()