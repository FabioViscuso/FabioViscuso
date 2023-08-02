export default function LoadingSpinner() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-300 bg-opacity-40 backdrop-blur-lg z-40 flex justify-center items-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
