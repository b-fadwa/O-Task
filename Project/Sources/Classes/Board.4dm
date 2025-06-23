Class extends DataClass

exposed function searchFromAll($search : text; $zone : text)->$boards : cs.BoardSelection
	if ($zone # "all")
		$boards := this.viewBoards().query("name = :1 AND zone = :2 AND archivedBoardSelection = null"; "@"+$search+"@"; $zone).orderBy("name asc")
	else 
		$boards := this.viewBoards().query("name = :1 AND archivedBoardSelection = null"; "@"+$search+"@").orderBy("name asc")
	end if 
	
exposed function publicBoards($search : text; $zone : text)->$boards : cs.BoardSelection
	if ($zone # "all")
		$boards := this.viewBoards().query("(private = :1 OR private = null) AND name = :2 AND archivedBoardSelection = null AND zone = :3"; false; "@"+$search+"@"; $zone).orderBy("name asc")
	else 
		$boards := this.viewBoards().query("(private = :1 OR private = null) AND name = :2 AND archivedBoardSelection = null"; false; "@"+$search+"@").orderBy("name asc")
	end if 

exposed function setElement($board : cs.BoardEntity)
	use (session.storage)
		session.storage.selectedBoard := new Shared Object("ID"; $board.ID)
	end use 
	
exposed function usersBoard($board : cs.BoardEntity)->$users : cs.UserSelection
	var $tasks: cs.TaskSelection
	$tasks := this.query("ID = :1"; $board.ID).tasks
	$users := ds.User.newSelection()
	$users := $users.or($tasks.user).orderBy("fullName asc")
	
exposed function viewBoards()->$boards : cs.BoardSelection
	var $currentUser: cs.UserEntity
	var $tasks: cs.TaskSelection
	var $userboards: cs.BoardSelection
	$currentUser := ds.User.getCurrentUser()
	if ($currentUser.role = "Admin")
		$boards := this.all()
	else 
		$tasks := ds.Task.query("user.ID = :1"; $currentUser.ID)
		$boards := this.newSelection()
		$boards := $tasks.boardOfTask
		$userboards := this.query("user.ID = :1"; $currentUser.ID)
		$boards := $boards.or($userboards)
	end if 
