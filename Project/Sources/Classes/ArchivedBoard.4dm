Class extends DataClass

// Functions to create, delete, and search archived boards for the current user

exposed Function selectArchived($search : Text; $zone : Text)->$selection : cs:C1710.ArchivedBoardSelection
	var $archivedBoards : cs:C1710.ArchivedBoardSelection
	var $user : cs:C1710.UserEntity
	$user:=ds:C1482.User.getCurrentUser()
	$archivedBoards:=This:C1470.query("user.ID = :1"; $user.ID).board.orderBy("name asc")
	$selection:=($zone#"all") ? $archivedBoards.query("name = :1 AND zone = :2"; "@"+$search+"@"; $zone) : $archivedBoards.query("name = :1"; "@"+$search+"@")
	
exposed Function deleteArchived($board : cs:C1710.BoardEntity)
	var $user : cs:C1710.UserEntity
	var $ArchivedBoardEnt : cs:C1710.ArchivedBoardEntity
	var $info : Object
	$user:=ds:C1482.User.getCurrentUser()
	$ArchivedBoardEnt:=This:C1470.query("user.ID = :1 AND board.ID = :2"; $user.ID; $board.ID).first()
	$info:=$ArchivedBoardEnt.drop()
	Web Form:C1735.setMessage("The board \""+$board.name+"\" has been unarchived successfully!")
	
exposed Function create($board : cs:C1710.BoardEntity)
	var $user : cs:C1710.UserEntity
	var $ArchivedBoardEnt : cs:C1710.ArchivedBoardEntity
	$user:=ds:C1482.User.getCurrentUser()
	$ArchivedBoardEnt:=This:C1470.new()
	$ArchivedBoardEnt.user:=$user
	$ArchivedBoardEnt.board:=$board
	$ArchivedBoardEnt.date:=Current date:C33()
	$ArchivedBoardEnt.time:=Current time:C178()
	$ArchivedBoardEnt.save()
	Web Form:C1735.setMessage("The board \""+$board.name+"\" has been archived successfully!")