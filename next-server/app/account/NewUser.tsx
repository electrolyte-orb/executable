import { Main } from '@/components';
import InitDialog from './InitDialog';

export default function NewUserPage() {
	return (
		<Main>
			<h1 className="mt-4 text-white text-lg font-bold tracking-tight">
				Just one click away. You will no longer be stranger to us.
			</h1>
			<InitDialog />
		</Main>
	);
}
