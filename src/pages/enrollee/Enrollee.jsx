/* itsZeroFour@gmail.com code side */

'use client'

import EnrolleeDocuments from '@/widgets/Enrollee/EnrolleeDocuments'
import EnrolleeMarCapital from '@/widgets/Enrollee/EnrolleeMarCapital'
import EnrolleeNecessary from '@/widgets/Enrollee/EnrolleeNecessary'
import EnrolleeOrder from '@/widgets/Enrollee/EnrolleeOrder'
import EnrolleeOtherLinks from '@/widgets/Enrollee/EnrolleeOtherLinks'
import EnrolleeRequzits from '@/widgets/Enrollee/EnrolleeRequzits'
import EnrolleeSpecialityes from '@/widgets/Enrollee/EnrolleeSpecialityes'
import EnrolleeTop from '@/widgets/Enrollee/EnrolleeTop'

import EnrolleImg from '@widgets/Enrollee/EnrolleImg/EnrolleImg'
import EnrolleRecomendations from '@widgets/Enrollee/EnrolleRecomendations'
import Background from "@entities/home/Background/Background";

const Enrollee = ({ files, specialityes }) => {
	return (
		<section>
                        <Background />			
                        <EnrolleeTop />

			<EnrolleeDocuments />
			<EnrolleImg />
			<EnrolleeOrder files={files ? files[0] : null} />
			<EnrolleeOtherLinks files={files ? files[1] : null} />
			<EnrolleRecomendations />
			<EnrolleeSpecialityes specialityes={specialityes} />
			<EnrolleeNecessary />
			<EnrolleeMarCapital />

			<EnrolleeRequzits />
		</section>
	)
}

export default Enrollee
