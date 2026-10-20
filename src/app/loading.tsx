export default function Loading() {
  return (
    <div className="w-full min-h-[40vh] flex justify-center items-center">
      <div
        className="h-10 w-10 rounded-full border-2 border-primary-1000/30 border-t-primary-1000 animate-spin"
        aria-label="Loading"
      />
    </div>
  );
}
