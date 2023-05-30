import { Main } from '@/components';
import InitDialog from './InitDialog';

export default function LoginPage() {
	return (
		<Main>
			<h2 className="text-4xl text-white tracking-tight font-medium">
				Login here
			</h2>
			<InitDialog />
		</Main>
	);
}
