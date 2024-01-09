export default function ParallelLayout({
  children,
  login,
  profile,
  modal,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  profile: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <hr />
      <div>{login}</div>
      <div>{profile}</div>
      <div>{modal}</div>
    </div>
  );
}
