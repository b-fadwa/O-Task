Class extends DataClass

//filter and order incidents by title and status
exposed Function searchIncident($status : Text; $search : Text)->$incidents : cs:C1710.IncidentSelection
	$incidents:=($status="all") ? This:C1470.query("title = :1"; "@"+$search+"@") : This:C1470.query("title = :1 AND status = :2"; "@"+$search+"@"; $status)
	$incidents:=$incidents.orderBy("createdAt desc, creationTime desc, updatedAt desc, updateTime desc")