import DateTime from '../ui/DateTime';

export default function AboutPage() {
  return (
    <div>
      This is about page!
      <hr />
      <div className='text-xs text-red-400'>
        <DateTime />
      </div>
    </div>
  );
}
