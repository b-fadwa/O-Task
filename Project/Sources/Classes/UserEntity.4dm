Class extends Entity

local Function $aws()->$result : Object
	$result:=Null:C1517
	If (Session:C1714.storage.users=Null:C1517)
		ds:C1482.loadUser()
	End if 
	If (Session:C1714.storage.users#Null:C1517)
		//$result = session.storage.users.query("ID = :1"; this.email).at(0)
		$result:=Session:C1714.storage.users.query("email = :1"; This:C1470.email).at(0)
	End if 
	
exposed Function get fullName()->$fullName : Text
	$fullName:=(This:C1470.firstName && This:C1470.lastName) ? (This:C1470.firstName+" "+Uppercase:C13(This:C1470.lastName; *)) : (Uppercase:C13(This:C1470.lastName; *) || This:C1470.firstName) || ""
	
exposed Function get firstName()->$firstname : Text
	var $aws : Object
	$firstname:=""
	$aws:=This:C1470.aws()
	If ($aws#Null:C1517)
		$firstname:=$aws.firstname
	End if 
	
exposed Function get lastName()->$lastname : Text
	var $aws : Object
	$lastname:=""
	$aws:=This:C1470.aws()
	If ($aws#Null:C1517)
		$lastname:=$aws.lastname
	End if 
	
exposed Function get role()->$role : Text
	var $aws : Object
	$role:=""
	$aws:=This:C1470.aws()
	If ($aws#Null:C1517)
		$role:=$aws.role
	End if 
	
exposed Function get activeNotifications()->$notif : Text
	var $nbr : Integer
	$nbr:=This:C1470.notifications.query("isRead = :1"; False:C215).length
	$notif:=($nbr>0) ? (($nbr>99) ? "+99" : String:C10($nbr)) : "0"
	
exposed Function get nbrTasks()->$nbrImportantTasks : Integer
	$nbrImportantTasks:=This:C1470.tasks.length
	
exposed Function get nbrTasksClosed()->$nbrTaskClosed : Integer
	$nbrTaskClosed:=This:C1470.closedTasks().length
	
exposed Function get nbrTasksLeft()->$nbrTaskClosed : Integer
	$nbrTaskClosed:=This:C1470.tasksNotClosed().length
	
exposed Function get nbrImportantTasks()->$nbrImportantTasks : Integer
	$nbrImportantTasks:=This:C1470.importantTasks().length
	
exposed Function get nbrTasksDeadlineToday()->$nbr : Integer
	$nbr:=This:C1470.deadlineTasksToday().length
	
exposed Function get nbrlateTasks()->$nbr : Integer
	$nbr:=This:C1470.lateTasks().length
	
exposed Function selectOrderedNotifs()->$notifs : cs:C1710.NotificationSelection
	$notifs:=This:C1470.notifications.orderBy("createdAt desc, creationTime desc")
	
exposed Function myBoards($search : Text; $zone : Text)->$boards : cs:C1710.BoardSelection
	var $boards1 : cs:C1710.BoardSelection
	If (This:C1470.role="Admin")
		If ($zone#"all")
			$boards:=ds:C1482.Board.query("private = :1 AND zone = :2 AND archivedBoardSelection = null"; True:C214; $zone)
		Else 
			$boards:=ds:C1482.Board.query("private = :1 AND archivedBoardSelection = null"; True:C214)
		End if 
	Else 
		$boards1:=This:C1470.boards.query("private = :1 AND archivedBoardSelection = null"; True:C214).orderBy("name asc")
		$boards:=($zone#"all") ? $boards1.query("zone = :1"; $zone) : $boards1
	End if 
	$boards:=$boards.query("name = :1"; "@"+$search+"@").orderBy("name asc")
	
exposed Function userNotes($board : cs:C1710.BoardEntity; $search : Text; $label : Text)->$notes : cs:C1710.NoteSelection
	This:C1470.reload()
	If ($label="all")
		$notes:=This:C1470.notes.query("board.ID = :1"; $board.ID)
	Else 
		$notes:=This:C1470.notes.query("board.ID = :1 AND labels.title = :2"; $board.ID; $label)
	End if 
	$notes:=$notes.query("title = :1 OR content = :2"; "@"+$search+"@"; "@"+$search+"@").orderBy("createdAt desc, creationTime desc")
	
exposed Function tasksNotClosed()->$tasks : cs:C1710.TaskSelection
	$tasks:=This:C1470.tasks.query("isClosed = :1"; "Not Closed").orderBy("endDate")
	
exposed Function importantTasks()->$tasks : cs:C1710.TaskSelection
	$tasks:=This:C1470.tasks.query("isImportant = :1"; True:C214).orderBy("endDate")
	
exposed Function deadlineTasksToday()->$tasks : cs:C1710.TaskSelection
	$tasks:=This:C1470.tasks.query("endDate = :1"; Current date:C33())
	
exposed Function lateTasks()->$tasks : cs:C1710.TaskSelection
	$tasks:=This:C1470.tasks.query("endDate < :1 AND list.name # :2"; Current date:C33(); "Closed").orderBy("endDate")
	
exposed Function closedTasks()->$tasks : cs:C1710.TaskSelection
	$tasks:=This:C1470.tasks.query("isClosed = :1"; "Closed").orderBy("UpdatedAt desc")
	
exposed Function readAllNotifs()
	var $notif : cs:C1710.NotificationEntity
	var $userNotifs : cs:C1710.NotificationSelection
	$userNotifs:=This:C1470.notifications
	For each ($notif; $userNotifs)
		$notif.readNotification()
	End for each 
	
exposed Function unreadAllNotifs()
	var $notif : cs:C1710.NotificationEntity
	var $userNotifs : cs:C1710.NotificationSelection
	$userNotifs:=This:C1470.notifications
	For each ($notif; $userNotifs)
		$notif.unreadNotification()
	End for each 