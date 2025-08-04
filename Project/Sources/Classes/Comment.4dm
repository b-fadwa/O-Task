Class extends DataClass

exposed Function newTaskComment($comment : cs:C1710.CommentEntity; $task : cs:C1710.TaskEntity)->$comments : cs:C1710.CommentSelection
	var $info : Object
	var $mailer : cs:C1710.Mailer
	var $commentContent; $subject; $content : Text
	$mailer:=cs:C1710.Mailer.new()
	$commentContent:=($comment.content#Null:C1517) ? ds:C1482.getTextFromTextEditor($comment.content) : ""
	If (($comment.content="") || ($comment.content=Null:C1517))
		Web Form:C1735.setError("Content of the comment is empty!")
	Else 
		$comment.createdAt:=Current date:C33()
		$comment.createdTime:=Current time:C178()
		$info:=$comment.save()
		If ($info.success)
			Web Form:C1735.setMessage("Comment Created Successfully!")
			ds:C1482.Notification.generateNotification("comment"; $comment.task.user; $comment.user; $comment.task)
			ds:C1482.Activity.generateActivity("commented on this task: "+$commentContent; "task"; Null:C1517; $comment.task)
			$subject:="New comment in the task: \""+$comment.task.name+"\" of the board: \""+$comment.task.boardOfTask.name+"\""
			$content:=$comment.user.fullName+" has added a comment in this task: \""+$commentContent+"\""
			$mailer.sendMail("New Comment in a Task"; $subject; $content; ds:C1482.User.getCurrentUser().email)
		Else 
			Web Form:C1735.setError("Error while creating!")
		End if 
	End if 
	$comments:=This:C1470.taskComments($task)
	
exposed Function newIncidentComment($comment : cs:C1710.CommentEntity; $incident : cs:C1710.IncidentEntity)
	var $info : Object
	var $mailer : cs:C1710.Mailer
	var $commentContent; $subject; $content : Text
	$mailer:=cs:C1710.Mailer.new()
	$commentContent:=($comment.content#Null:C1517) ? ds:C1482.getTextFromTextEditor($comment.content) : ""
	If (($comment.content="") || ($comment.content=Null:C1517))
		Web Form:C1735.setError("Content of the comment is empty!")
	Else 
		$comment.createdAt:=Current date:C33()
		$comment.createdTime:=Current time:C178()
		$info:=$comment.save()
		If ($info.success)
			Web Form:C1735.setMessage("Comment Created Successfully!")
			ds:C1482.Notification.generateNotifIncident($comment.problem.user; $comment.user; $comment.problem)
			ds:C1482.Activity.generateActivity("commented on this incident: "+$commentContent; "incident"; $comment.problem; Null:C1517)
			$subject:="New comment in the incident: \""+$comment.problem.title+"\""
			$content:=$comment.user.fullName+" has added a comment in this incident: \""+$commentContent+"\""
			If ($incident.assignee#Null:C1517)
				$mailer.sendMail("New Comment in an Incident"; $subject; $content; ds:C1482.User.getCurrentUser().email)
			End if 
		Else 
			Web Form:C1735.setError("Error while creating!")
		End if 
	End if 
	
exposed Function dropTaskComments($task : cs:C1710.TaskEntity)
	var $comments : cs:C1710.CommentSelection
	$comments:=$task.comments
	$comments.drop()
	
exposed Function taskComments($task : cs:C1710.TaskEntity)->$comments : cs:C1710.CommentSelection
	$comments:=This:C1470.query("task.ID = :1"; $task.ID).orderBy("createdAt desc, createdTime desc")