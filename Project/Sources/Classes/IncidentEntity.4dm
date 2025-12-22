Class extends Entity

exposed Function get nbrTasks()->$result : Integer
	$result:=This:C1470.tasks.length
	
exposed Function get isUpdated()->$result : Boolean
	$result:=(This:C1470.updatedAt=Null:C1517) ? False:C215 : True:C214
	
exposed Function createIncident()
	var $mailer : cs:C1710.Mailer
	var $subject; $content : Text
	var $currentUser : cs:C1710.UserEntity:=ds:C1482.User.getCurrentUser()
	$mailer:=cs:C1710.Mailer.new()
	This:C1470.createdAt:=Current date:C33()
	This:C1470.creationTime:=Current time:C178()
	This:C1470.save()
	Web Form:C1735.setMessage("Incident Created Successfully!")
	ds:C1482.Activity.generateActivity("created the incident"; "incident"; This:C1470; Null:C1517)
	If (This:C1470.assignee#Null:C1517)
		ds:C1482.Activity.generateActivity("assigned to "+This:C1470.assignee.fullName; "assigneeIncident"; This:C1470; Null:C1517)
		ds:C1482.Notification.generateNotifAssignee(This:C1470.assignee; This:C1470)
		$subject:="New incident assigned to you: \""+This:C1470.title+"\""
		$content:="An incident is been assigned to you: \""+This:C1470.title+"\", created by: \""+$currentUser.fullName+"\" at: \""+String:C10(This:C1470.createdAt)+", "+String:C10(Time:C179(This:C1470.creationTime))+"\""
		$mailer.sendMail("New Incident assigned to you"; $subject; $content; This:C1470.assignee.email)
	End if 
	$subject:="New incident declared: \""+This:C1470.title+"\""
	$content:="An incident is been declared: \""+This:C1470.title+"\", created by: \""+$currentUser.fullName+"\" at: \""+String:C10(This:C1470.createdAt)+", "+String:C10(Time:C179(This:C1470.creationTime))+"\""
	$mailer.sendMail("New Incident declared"; $subject; $content; $currentUser.email)
	
exposed Function updateIncident()
	var $mailer : cs:C1710.Mailer
	var $subject; $content : Text
	var $currentUser : cs:C1710.UserEntity:=ds:C1482.User.getCurrentUser()
	
	$mailer:=cs:C1710.Mailer.new()
	This:C1470.updatedAt:=Current date:C33()
	This:C1470.updateTime:=Current time:C178()
	This:C1470.save()
	Web Form:C1735.setMessage("Incident Updated Successfully!")
	If (This:C1470.status="closed")
		ds:C1482.Activity.generateActivity("closed the incident"; "incident"; This:C1470; Null:C1517)
		$subject:="Incident closed: \""+This:C1470.title+"\""
		$content:="The incident: \""+This:C1470.title+"\" is been closed by: \""+$currentUser.fullName+"\" at: \""+String:C10(This:C1470.updatedAt)+", "+String:C10(Time:C179(This:C1470.updateTime))+"\""
		$mailer.sendMail("Incident Closed"; $subject; $content; $currentUser.email)
	Else 
		ds:C1482.Activity.generateActivity("updated the incident"; "incident"; This:C1470; Null:C1517)
		$subject:="Incident updated: \""+This:C1470.title+"\""
		$content:=$currentUser.fullName+" has updated the incident: \""+This:C1470.title+"\" at: \""+String:C10(This:C1470.updatedAt)+", "+String:C10(Time:C179(This:C1470.updateTime))+"\""
		$mailer.sendMail("Incident Updated"; $subject; $content; $currentUser.email)
	End if 
	If (This:C1470.assignee#Null:C1517)
		ds:C1482.Activity.generateActivity("assigned to "+This:C1470.assignee.fullName; "assigneeIncident"; This:C1470; Null:C1517)
		ds:C1482.Notification.generateNotifAssignee(This:C1470.assignee; This:C1470)
		$subject:="Incident assigned: \""+This:C1470.title+"\""
		$content:=ds:C1482.User.getCurrentUser().fullName+" has assigned the incident: \""+This:C1470.title+"\" to: \""+This:C1470.assignee.fullName+"\" at: \""+String:C10(This:C1470.updatedAt)+", "+String:C10(Time:C179(This:C1470.updateTime))+"\""
		$mailer.sendMail("Incident Assigned"; $subject; $content; ds:C1482.User.getCurrentUser().email)
	End if 
	
exposed Function orderComments()->$comments : cs:C1710.CommentSelection
	This:C1470.reload()
	$comments:=This:C1470.comments.orderBy("createdAt desc, createdTime desc")