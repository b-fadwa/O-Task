Class extends Entity

exposed alias boardOfTask list.board
exposed alias tags taskTags.tag

exposed function getList()->$result : cs.ListEntity
	$result := this.list
	
exposed function get isClosed()->$result : text
	$result := (this.track = 100) ? "Closed" : "Not Closed"
	
exposed function get duration()->$result : integer
	if ((this.startDate # null) && (this.endDate # null))
		$result := this.endDate-this.startDate
	end if 
	
exposed function get nbrComments()->$result : integer
	$result := this.comments.length
	
exposed function get gapResult->$result : text
	var $difference: integer
	if (this.endDate # null)
		$difference := this.endDate-current Date()
		if (this.endDate > current Date())
			$result := "notDeadline"
		else 
			if (this.endDate = current Date())
				$result := "todayDeadline"
			else 
				$result := "overDue"
			end if 
		end if 
	end if 
	
exposed function get gap()->$result : text
	var $difference: integer
	if (this.endDate # null)
		$difference := this.endDate-current Date()
		if (this.endDate > current Date())
			$result := string($difference)+" day(s) to deadline"
		else 
			if (this.endDate = current Date())
				$result := "Deadline Today"
			else 
				$result := string(-$difference)+" day(s) overdue"
			end if 
		end if 
	end if 
	
exposed function EndDate($duration : integer)->$result : date
	$result := this.startDate+$duration
	
exposed function deleteActivities()
	this.activities.drop()
	
exposed function orderComments()->$comments : cs.CommentSelection
	$comments := this.comments.orderBy("createdAt desc, createdTime desc")
	
exposed function create($tagsSelected : cs.TagSelection; $board : cs.BoardEntity; $listName : text)
	var $info: object
	var $subject; $content: text
	var $listEnt: cs.ListEntity
	var $tag: cs.TagEntity
	var $taskTag: cs.TaskTagEntity
	var $mailer: cs.Mailer
	$mailer := cs.Mailer.new()
	this.createdAt := current Date()
	this.createdTime := current Time()
	this.list := ds.List.query("board.ID = :1 AND name = :2"; $board.ID; $listName).first()
	$info := this.save()
	web Form.setMessage("Task Created Successfully!")
	ds.Notification.generateNotification("task"; this.user; ds.User.getCurrentUser(); this)
	ds.Activity.generateActivity("created the task"; "task"; null; this)
	for Each ($tag; $tagsSelected)
		$taskTag := ds.TaskTag.new()
		$taskTag.tag := $tag
		$taskTag.task := this
		$taskTag.save()
	end for each 
	$subject := "New task created in the board: \""+this.boardOfTask.name+"\""
	$content := "New task is been created in this board: \""+this.boardOfTask.name+"\". This is the task: \""+this.name+"\""
	$mailer.sendMail("New Task Created"; $subject; $content; ds.User.getCurrentUser().email)
	if (this.user # null)
		$subject := "New task assigned to: \""+this.user.fullName+"\" in the board: \""+this.boardOfTask.name+"\""
		$content := "New task is been assigned to \""+this.user.fullName+"\" in this board: \""+this.boardOfTask.name+"\". This is the task: \""+this.name+"\""
		$mailer.sendMail("New Task Assigned to \""+this.user.fullName+"\""; $subject; $content; ds.User.getCurrentUser().email)
	end if 
	
exposed function update($tagsSelected : cs.TagSelection; $board : cs.BoardEntity; $listName : text)
	var $info: object
	var $subject; $content: text
	var $listEnt: cs.ListEntity
	var $tag: cs.TagEntity
	var $taskTag: cs.TaskTagEntity
	var $mailer: cs.Mailer
	$mailer := cs.Mailer.new()
	this.UpdatedAt := current Date()
	this.updatedtime := current Time()
	this.list := ds.List.query("board.ID = :1 AND name = :2"; $board.ID; $listName).first()
	$info := this.save()
	web Form.setMessage("Task Edited Successfully!")
	ds.TaskTag.dropTaskTags(this)
	for Each ($tag; $tagsSelected)
		$taskTag := ds.TaskTag.new()
		$taskTag.tag := $tag
		$taskTag.task := this
		$taskTag.save()
	end for each 
	if (this.track = 100)
		this.list := ds.List.query("name = :1 AND board.ID = :2"; "Closed"; this.boardOfTask.ID).first()
		this.save()
		ds.Notification.generateNotification("closedTask"; this.user; ds.User.getCurrentUser(); this)
		ds.Activity.generateActivity("closed the task"; "task"; null; this)
		$subject := "Task Closed in the board: \""+this.boardOfTask.name+"\""
		$content := "The task: \""+this.name+"\" in this board: \""+this.boardOfTask.name+"\" is been closed by: \""+ds.User.getCurrentUser().fullName+"\" at: \""+string(this.UpdatedAt)+", "+string(time(this.updatedtime))+"\""
		$mailer.sendMail("Task Closed"; $subject; $content; ds.User.getCurrentUser().email)
	else 
		if (this.list.name = "Closed")
			this.list := ds.List.query("name = :1 AND board.ID = :2"; "Closed"; this.boardOfTask.ID).first()
			this.track := 100
			this.save()
			ds.Notification.generateNotification("closedTask"; this.user; ds.User.getCurrentUser(); this)
			ds.Activity.generateActivity("closed the task"; "task"; null; this)
			$subject := "Task Closed in the board: \""+this.boardOfTask.name+"\""
			$content := "The task: \""+this.name+"\" in this board: \""+this.boardOfTask.name+"\" is been closed by: \""+ds.User.getCurrentUser().fullName+"\" at: \""+string(this.UpdatedAt)+", "+string(time(this.updatedtime))+"\""
			$mailer.sendMail("Task Closed"; $subject; $content; ds.User.getCurrentUser().email)
		else 
			ds.Notification.generateNotification("updateTask"; this.user; ds.User.getCurrentUser(); this)
			ds.Activity.generateActivity("updated the task"; "task"; null; this)
			$subject := "Task Updated in the board: \""+this.boardOfTask.name+"\""
			$content := ds.User.getCurrentUser().fullName+" has updated the task : \""+this.name+"\" assigned to: \""+this.user.fullName+"\" in this board: \""+this.boardOfTask.name+"\" at: \""+string(this.UpdatedAt)+", "+string(time(this.updatedtime))+"\""
			$mailer.sendMail("Task Updated"; $subject; $content; ds.User.getCurrentUser().email)
		end if 
	end if