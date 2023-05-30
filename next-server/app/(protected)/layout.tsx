export const runtime = 'edge';
export const revalidate = 0;

export default async function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="text-red-500">{children}</div>;
}
