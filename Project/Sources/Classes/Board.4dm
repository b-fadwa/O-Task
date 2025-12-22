Class extends DataClass

exposed Function searchFromAll($search : Text; $zone : Text)->$boards : cs:C1710.BoardSelection
	If ($zone#"all")
		$boards:=This:C1470.viewBoards().query("name = :1 AND zone = :2 AND archivedBoardSelection = null"; "@"+$search+"@"; $zone).orderBy("name asc")
	Else 
		$boards:=This:C1470.viewBoards().query("name = :1 AND archivedBoardSelection = null"; "@"+$search+"@").orderBy("name asc")
	End if 
	
	//gets public boards
exposed Function publicBoards($search : Text; $zone : Text)->$boards : cs:C1710.BoardSelection
	If ($zone#"all")
		$boards:=This:C1470.viewBoards().query("(private = :1 OR private = null) AND name = :2 AND archivedBoardSelection = null AND zone = :3"; False:C215; "@"+$search+"@"; $zone).orderBy("name asc")
	Else 
		$boards:=This:C1470.viewBoards().query("(private = :1 OR private = null) AND name = :2 AND archivedBoardSelection = null"; False:C215; "@"+$search+"@").orderBy("name asc")
	End if 
	
exposed Function setElement($board : cs:C1710.BoardEntity)
	Use (Session:C1714.storage)
		Session:C1714.storage.selectedBoard:=New shared object:C1526("ID"; $board.ID)
	End use 
	
	// Returns all users associated with a given board via tasks, ordered by full name
exposed Function usersBoard($board : cs:C1710.BoardEntity)->$users : cs:C1710.UserSelection
	var $tasks : cs:C1710.TaskSelection
	$tasks:=This:C1470.query("ID = :1"; $board.ID).tasks
	$users:=ds:C1482.User.newSelection()
	$users:=$users.or($tasks.user).orderBy("fullName asc")
	
	// Returns all boards visible to the current user, combining admin access, assigned tasks, and owned boards
exposed Function viewBoards()->$boards : cs:C1710.BoardSelection
	var $currentUser : cs:C1710.UserEntity
	var $tasks : cs:C1710.TaskSelection
	var $userboards : cs:C1710.BoardSelection
	$currentUser:=ds:C1482.User.getCurrentUser()
	If ($currentUser.role="Admin")
		$boards:=This:C1470.all()
	Else 
		$tasks:=ds:C1482.Task.query("user.ID = :1"; $currentUser.ID)
		$boards:=This:C1470.newSelection()
		$boards:=$tasks.boardOfTask
		$userboards:=This:C1470.query("user.ID = :1"; $currentUser.ID)
		$boards:=$boards.or($userboards)
	End if 
	