Class extends DataClass

exposed Function getCurrentUser() : cs:C1710.UserEntity
	return This:C1470.query("email = :1"; Session:C1714.storage.payLoad.login).first()
	
exposed Function searchUser($search : Text)->$users : cs:C1710.UserSelection
	$users:=This:C1470.query("fullName = :1"; "@"+$search+"@").orderBy("fullName asc")