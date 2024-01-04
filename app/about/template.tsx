export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='m-5 border p-3'>
      <h1 className='font-bold'>This is About Template</h1>
      <div className=' border-2 border-blue-500 border-dotted'>{children}</div>
    </div>
  );
}
