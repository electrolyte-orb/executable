import InitDialog from './InitDialog';

export const revalidate = 0;

export default async function Home() {
	return (
		<main className="p-8">
			<h1 className="text-2xl font-bold leading-tight text-white text-center">
				Exec Services
			</h1>
			<InitDialog />
		</main>
	);
}
