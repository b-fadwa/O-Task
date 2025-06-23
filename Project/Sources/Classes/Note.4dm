Class extends DataClass

exposed function $pinnedNotes($board : cs.BoardEntity; $search : text; $label : text)->$pinnedNotes : cs.NoteSelection
	var $connectedUser: cs.UserEntity
	$connectedUser := ds.User.getCurrentUser()
	if ($label = "all")
		$pinnedNotes := this.query("board.ID = :1 AND user.ID = :2"; $board.ID; $connectedUser.ID)
	else 
		$pinnedNotes := this.query("board.ID = :1 AND user.ID = :2 AND labels.title = :3"; $board.ID; $connectedUser.ID; $label)
	end if 
	$pinnedNotes := $pinnedNotes.query("isPinned = :1 AND (title = :2 OR content = :3)"; true; "@"+$search+"@"; "@"+$search+"@").orderBy("createdAt desc, creationTime desc")