export default function ParallelLayout({
  children,
  viewer,
}: {
  children: React.ReactNode;
  viewer: React.ReactNode;
}) {
  return (
    <>
      {children}
      {viewer}
    </>
  );
}
