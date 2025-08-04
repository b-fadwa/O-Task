Class extends DataClass

exposed Function pinnedNotes($board : cs:C1710.BoardEntity; $search : Text; $label : Text)->$pinnedNotes : cs:C1710.NoteSelection
	var $connectedUser : cs:C1710.UserEntity
	$connectedUser:=ds:C1482.User.getCurrentUser()
	If ($label="all")
		$pinnedNotes:=This:C1470.query("board.ID = :1 AND user.ID = :2"; $board.ID; $connectedUser.ID)
	Else 
		$pinnedNotes:=This:C1470.query("board.ID = :1 AND user.ID = :2 AND labels.title = :3"; $board.ID; $connectedUser.ID; $label)
	End if 
	$pinnedNotes:=$pinnedNotes.query("isPinned = :1 AND (title = :2 OR content = :3)"; True:C214; "@"+$search+"@"; "@"+$search+"@").orderBy("createdAt desc, creationTime desc")