Class extends DataClass

exposed function selectArchived($search : text; $zone : text)->$selection : cs.BoardSelection
	var $archivedBoards: cs.ArchivedBoardSelection
	var $user: cs.UserEntity
	$user := ds.User.getCurrentUser()
	$archivedBoards := this.query("user.ID = :1"; $user.ID).board.orderBy("name asc")
	$selection := ($zone # "all") ? $archivedBoards.query("name = :1 AND zone = :2"; "@"+$search+"@"; $zone) : $archivedBoards.query("name = :1"; "@"+$search+"@")
	
exposed function deleteArchived($board : cs.BoardEntity)
	var $user: cs.UserEntity
	var $ArchivedBoardEnt: cs.ArchivedBoardEntity
	var $info: object
	$user := ds.User.getCurrentUser()
	$ArchivedBoardEnt := this.query("user.ID = :1 AND board.ID = :2"; $user.ID; $board.ID).first()
	$info := $ArchivedBoardEnt.drop()
	web Form.setMessage("The board \""+board.name+"\" has been unarchived successfully!")
	
exposed function create($board : cs.BoardEntity)
	var $user: cs.UserEntity
	var $ArchivedBoardEnt: cs.ArchivedBoardEntity
	$user := ds.User.getCurrentUser()
	$ArchivedBoardEnt := this.new()
	$ArchivedBoardEnt.user := $user
	$ArchivedBoardEnt.board := $board
	$ArchivedBoardEnt.date := current Date()
	$ArchivedBoardEnt.time := current Time()
	$ArchivedBoardEnt.save()
	web Form.setMessage("The board \""+board.name+"\" has been archived successfully!")