Class extends DataClass
	
exposed function searchIncident($status : text; $search : text)->$incidents : cs.IncidentSelection
	$incidents := ($status = "all") ? this.query("title = :1"; "@"+$search+"@") : this.query("title = :1 AND status = :2"; "@"+$search+"@"; $status)
	$incidents := $incidents.orderBy("createdAt desc, creationTime desc, updatedAt desc, updateTime desc")