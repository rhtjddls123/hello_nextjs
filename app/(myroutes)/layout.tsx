export default function MyroutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='m-5 border border-blue-500 border-solid p-3'>
      <h1 className='font-bold'>This is My Routes Layout</h1>
      <div className=' border-2 border-blue-500 border-dotted'>{children}</div>
    </div>
  );
}
