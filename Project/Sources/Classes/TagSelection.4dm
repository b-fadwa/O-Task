Class extends EntitySelection

exposed Function addToTag($option : cs.TagEntity) ->$selection : cs.TagSelection
	$selection := this.copy()
	$selection := $selection.add($option)
	$selection := $selection.orderBy("name asc")

exposed Function removeTag($option : cs.TagEntity) ->$selection : cs.TagSelection
	$selection := this.minus($option).orderBy("name asc")