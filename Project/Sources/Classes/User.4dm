Class extends DataClass

exposed function getCurrentUser()->$user : cs.UserEntity
	var $userCloud: object
	if (session.storage.currentUser = null)
		$userCloud := cs.Qodly.Users.me.currentUser()
		if ($userCloud # null)
			$user := this.query("email = :1"; $userCloud.email).first()
			if ($user = null)
				$user := ds.User.new()
				$user.email := $userCloud.email
				$user.save()
			end if 
			use (session.storage)
				session.storage.currentUser := new Shared Object("email"; $user.email)
				session.storage.users := cs.Qodly.Users.me.allUsers().copy(ck shared)
			end use 
		end if 
	else 
		$user := this.all().query("email = :1";session.storage.currentUser.email).first()
	end if 

exposed function searchUser($search : text)->$users : cs.UserSelection
	$users := this.query("fullName = :1"; "@"+$search+"@").orderBy("fullName asc")