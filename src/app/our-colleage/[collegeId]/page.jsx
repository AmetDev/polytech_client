'use client'

import CollegePage from '../../../widgets/Ourcollege/[collegeId]/CollegePage'

// {() => {
// 	if (!el.pageData) {
// 		return <span>Извините, но данные не найдены :(</span>
// 	} else {
// 		return el.pageData
// 	}
// }}
export default function Page({ params }) {
	return <CollegePage params={params} />
}
