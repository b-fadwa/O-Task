Class extends DataClass

exposed Function getCurrentUser() : cs:C1710.UserEntity
	return This:C1470.get(Session:C1714.storage.payLoad.ID)
	
exposed Function searchUser($search : Text)->$users : cs:C1710.UserSelection
	$users:=This:C1470.query("fullName = :1"; "@"+$search+"@").orderBy("fullName asc")