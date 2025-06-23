Class extends Entity

exposed function get nbrTasks()->$result : integer
	$result := this.tasks.length
	
exposed function get isUpdated()->$result : boolean
	$result := (this.updatedAt = null) ? false : true
	
exposed function createIncident()
	var $mailer: cs.Mailer
	var $subject; $content: text
	$mailer := cs.Mailer.new()
	this.createdAt := current Date()
	this.creationTime := current Time()
	this.save()
	web Form.setMessage("Incident Created Successfully!")
	ds.Activity.generateActivity("created the incident"; "incident"; this; null)
	if (this.assignee # null)
		ds.Activity.generateActivity("assigned to "+this.assignee.fullName; "assigneeIncident"; this; null)
		ds.Notification.generateNotifAssignee(this.assignee; this)
		$subject := "New incident assigned to you: \""+this.title+"\""
		$content := "An incident is been assigned to you: \""+this.title+"\", created by: \""+ds.User.getCurrentUser().fullName+"\" at: \""+string(this.createdAt)+", "+string(time(this.creationTime))+"\""
		$mailer.sendMail("New Incident assigned to you"; $subject; $content; this.assignee.email)
	end if 
	$subject := "New incident declared: \""+this.title+"\""
	$content := "An incident is been declared: \""+this.title+"\", created by: \""+ds.User.getCurrentUser().fullName+"\" at: \""+string(this.createdAt)+", "+string(time(this.creationTime))+"\""
	$mailer.sendMail("New Incident declared"; $subject; $content; ds.User.getCurrentUser().email)
	
exposed function updateIncident()
	var $mailer: cs.Mailer
	var $subject; $content: text
	$mailer := cs.Mailer.new()
	this.updatedAt := current Date()
	this.updateTime := current Time()
	this.save()
	web Form.setMessage("Incident Updated Successfully!")
	if (this.status = "closed")
		ds.Activity.generateActivity("closed the incident"; "incident"; this; null)
		$subject := "Incident closed: \""+this.title+"\""
		$content := "The incident: \""+this.title+"\" is been closed by: \""+ds.User.getCurrentUser().fullName+"\" at: \""+string(this.updatedAt)+", "+string(time(this.updateTime))+"\""
		$mailer.sendMail("Incident Closed"; $subject; $content; ds.User.getCurrentUser().email)
	else 
		ds.Activity.generateActivity("updated the incident"; "incident"; this; null)
		$subject := "Incident updated: \""+this.title+"\""
		$content := ds.User.getCurrentUser().fullName+" has updated the incident: \""+this.title+"\" at: \""+string(this.updatedAt)+", "+string(time(this.updateTime))+"\""
		$mailer.sendMail("Incident Updated"; $subject; $content; ds.User.getCurrentUser().email)
	end if 
	if (this.assignee # null)
		ds.Activity.generateActivity("assigned to "+this.assignee.fullName; "assigneeIncident"; this; null)
		ds.Notification.generateNotifAssignee(this.assignee; this)
		$subject := "Incident assigned: \""+this.title+"\""
		$content := ds.User.getCurrentUser().fullName+" has assigned the incident: \""+this.title+"\" to: \""+this.assignee.fullName+"\" at: \""+string(this.updatedAt)+", "+string(time(this.updateTime))+"\""
		$mailer.sendMail("Incident Assigned"; $subject; $content; ds.User.getCurrentUser().email)
	end if 
	
exposed function orderComments()->$comments : cs.CommentSelection
	this.reload()
	$comments := this.comments.orderBy("createdAt desc, createdTime desc")