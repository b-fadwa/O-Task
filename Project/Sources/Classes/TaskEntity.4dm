Class extends Entity

exposed Alias boardOfTask list.board
exposed Alias tags taskTags.tag

exposed Function getList()->$result : cs:C1710.ListEntity
	$result:=This:C1470.list
	
exposed Function get isClosed()->$result : Text
	$result:=(This:C1470.track=100) ? "Closed" : "Not Closed"
	
exposed Function get duration()->$result : Integer
	If ((This:C1470.startDate#Null:C1517) && (This:C1470.endDate#Null:C1517))
		$result:=This:C1470.endDate-This:C1470.startDate
	End if 
	
exposed Function get nbrComments()->$result : Integer
	$result:=This:C1470.comments.length
	
exposed Function get gapResult->$result : Text
	var $difference : Integer
	If (This:C1470.endDate#Null:C1517)
		$difference:=This:C1470.endDate-Current date:C33()
		If (This:C1470.endDate>Current date:C33())
			$result:="notDeadline"
		Else 
			If (This:C1470.endDate=Current date:C33())
				$result:="todayDeadline"
			Else 
				$result:="overDue"
			End if 
		End if 
	End if 
	
exposed Function get gap()->$result : Text
	var $difference : Integer
	If (This:C1470.endDate#Null:C1517)
		$difference:=This:C1470.endDate-Current date:C33()
		If (This:C1470.endDate>Current date:C33())
			$result:=String:C10($difference)+" day(s) to deadline"
		Else 
			If (This:C1470.endDate=Current date:C33())
				$result:="Deadline Today"
			Else 
				$result:=String:C10(-$difference)+" day(s) overdue"
			End if 
		End if 
	End if 
	
exposed Function EndDate($duration : Integer)->$result : Date
	$result:=This:C1470.startDate+$duration
	
exposed Function deleteActivities()
	This:C1470.activities.drop()
	
exposed Function orderComments()->$comments : cs:C1710.CommentSelection
	$comments:=This:C1470.comments.orderBy("createdAt desc, createdTime desc")
	
exposed Function create($tagsSelected : cs:C1710.TagSelection; $board : cs:C1710.BoardEntity; $listName : Text)
	var $info : Object
	var $subject; $content : Text
	var $listEnt : cs:C1710.ListEntity
	var $tag : cs:C1710.TagEntity
	var $taskTag : cs:C1710.TaskTagEntity
	var $mailer : cs:C1710.Mailer
	var $currentUser : cs:C1710.UserEntity:=ds:C1482.User.getCurrentUser()
	$mailer:=cs:C1710.Mailer.new()
	This:C1470.createdAt:=Current date:C33()
	This:C1470.createdTime:=Current time:C178()
	This:C1470.list:=ds:C1482.List.query("board.ID = :1 AND name = :2"; $board.ID; $listName).first()
	$info:=This:C1470.save()
	Web Form:C1735.setMessage("Task Created Successfully!")
	ds:C1482.Notification.generateNotification("task"; This:C1470.user; $currentUser; This:C1470)
	ds:C1482.Activity.generateActivity("created the task"; "task"; Null:C1517; This:C1470)
	For each ($tag; $tagsSelected)
		$taskTag:=ds:C1482.TaskTag.new()
		$taskTag.tag:=$tag
		$taskTag.task:=This:C1470
		$taskTag.save()
	End for each 
	$subject:="New task created in the board: \""+This:C1470.boardOfTask.name+"\""
	$content:="New task is been created in this board: \""+This:C1470.boardOfTask.name+"\". This is the task: \""+This:C1470.name+"\""
	$mailer.sendMail("New Task Created"; $subject; $content; $currentUser.email)
	If (This:C1470.user#Null:C1517)
		$subject:="New task assigned to: \""+This:C1470.user.fullName+"\" in the board: \""+This:C1470.boardOfTask.name+"\""
		$content:="New task is been assigned to \""+This:C1470.user.fullName+"\" in this board: \""+This:C1470.boardOfTask.name+"\". This is the task: \""+This:C1470.name+"\""
		$mailer.sendMail("New Task Assigned to \""+This:C1470.user.fullName+"\""; $subject; $content; $currentUser.email)
	End if 
	
exposed Function update($tagsSelected : cs:C1710.TagSelection; $board : cs:C1710.BoardEntity; $listName : Text)
	var $info : Object
	var $subject; $content : Text
	var $listEnt : cs:C1710.ListEntity
	var $tag : cs:C1710.TagEntity
	var $taskTag : cs:C1710.TaskTagEntity
	var $mailer : cs:C1710.Mailer
	var $currentUser : cs:C1710.UserEntity:=ds:C1482.User.getCurrentUser()
	$mailer:=cs:C1710.Mailer.new()
	This:C1470.UpdatedAt:=Current date:C33()
	This:C1470.updatedtime:=Current time:C178()
	This:C1470.list:=ds:C1482.List.query("board.ID = :1 AND name = :2"; $board.ID; $listName).first()
	$info:=This:C1470.save()
	Web Form:C1735.setMessage("Task Edited Successfully!")
	ds:C1482.TaskTag.dropTaskTags(This:C1470)
	For each ($tag; $tagsSelected)
		$taskTag:=ds:C1482.TaskTag.new()
		$taskTag.tag:=$tag
		$taskTag.task:=This:C1470
		$taskTag.save()
	End for each 
	If (This:C1470.track=100)
		This:C1470.list:=ds:C1482.List.query("name = :1 AND board.ID = :2"; "Closed"; This:C1470.boardOfTask.ID).first()
		This:C1470.save()
		ds:C1482.Notification.generateNotification("closedTask"; This:C1470.user; $currentUser; This:C1470)
		ds:C1482.Activity.generateActivity("closed the task"; "task"; Null:C1517; This:C1470)
		$subject:="Task Closed in the board: \""+This:C1470.boardOfTask.name+"\""
		$content:="The task: \""+This:C1470.name+"\" in this board: \""+This:C1470.boardOfTask.name+"\" is been closed by: \""+$currentUser.fullName+"\" at: \""+String:C10(This:C1470.UpdatedAt)+", "+String:C10(Time:C179(This:C1470.updatedtime))+"\""
		$mailer.sendMail("Task Closed"; $subject; $content; $currentUser.email)
	Else 
		If (This:C1470.list.name="Closed")
			This:C1470.list:=ds:C1482.List.query("name = :1 AND board.ID = :2"; "Closed"; This:C1470.boardOfTask.ID).first()
			This:C1470.track:=100
			This:C1470.save()
			ds:C1482.Notification.generateNotification("closedTask"; This:C1470.user; $currentUser; This:C1470)
			ds:C1482.Activity.generateActivity("closed the task"; "task"; Null:C1517; This:C1470)
			$subject:="Task Closed in the board: \""+This:C1470.boardOfTask.name+"\""
			$content:="The task: \""+This:C1470.name+"\" in this board: \""+This:C1470.boardOfTask.name+"\" is been closed by: \""+$currentUser.fullName+"\" at: \""+String:C10(This:C1470.UpdatedAt)+", "+String:C10(Time:C179(This:C1470.updatedtime))+"\""
			$mailer.sendMail("Task Closed"; $subject; $content; $currentUser.email)
		Else 
			ds:C1482.Notification.generateNotification("updateTask"; This:C1470.user; $currentUser; This:C1470)
			ds:C1482.Activity.generateActivity("updated the task"; "task"; Null:C1517; This:C1470)
			$subject:="Task Updated in the board: \""+This:C1470.boardOfTask.name+"\""
			$content:=$currentUser.fullName+" has updated the task : \""+This:C1470.name+"\" assigned to: \""+This:C1470.user.fullName+"\" in this board: \""+This:C1470.boardOfTask.name+"\" at: \""+String:C10(This:C1470.UpdatedAt)+", "+String:C10(Time:C179(This:C1470.updatedtime))+"\""
			$mailer.sendMail("Task Updated"; $subject; $content; $currentUser.email)
		End if 
	End if 