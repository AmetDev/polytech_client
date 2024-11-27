import '@/app/scss/index.scss'
import Footer from '@/widgets/footer/footer'
import Header from '@/widgets/header/header'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { Suspense } from 'react'
import Loader from './loading'
import StoreProvider from './store/StoreProvider'
import Background from '@entities/home/Background/Background'

export const metadata = {
	title: 'Симферопольский политехнический колледж',
	description: `Государственное бюджетное профессиональное образовательное учреждение
   Республики Крым «Симферопольский политехнический колледж», создано Советом министров
  Республики Крым на основании распоряжения от 09.12.2014 № 1326-р
  «О создании Государственных бюджетных учреждений Республики Крым»,
  приказа Министерства образования, науки и молодежи Республики Крым
  от 11.12.2014 №349 «О государственных бюджетных учреждениях Республики Крым».`,
	icons: {
		icon: '/icon.ico',
	},
}

const poppins = Poppins({
	weight: ['400', '500', '700'],
	style: 'normal',
	subsets: ['latin'],
})

const getLinksData = async () => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheaderall`,
			{
				next: { revalidate: 0 },
			}
		)

		const data = await response.json()

		return data
	} catch {
		const data = []
		return data
	}
}

const RootLayout = async ({ children }) => {
	const linksServer = await getLinksData()

	return (
		<html len='ru'>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
			</Head>
			<body className={poppins.main}>
				<Background/>
				<StoreProvider>
					<div className='page'>
						<div className='container'>
							<Header data={linksServer} />
							<Loader />
							<Suspense fallback={<Loader />}>{children}</Suspense>
						</div>

						<Footer />
					</div>
				</StoreProvider>

				<Script src='https://lidrekon.ru/slep/js/jquery.js' />
				<Script src='https://lidrekon.ru/slep/js/uhpv-full.min.js' />
			</body>
		</html>
	)
}

export default RootLayout
