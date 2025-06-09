export const ProductMerchants= ()=>{
    return (
        <div className={`flex  h-[100] w-full flex-col items-center justify-center p-4`}>
      <h2 className="text-2xl font-bold mb-4">Right Section</h2>
      <p className="mb-4">This section takes up the entire right half of the screen</p>
      <button
        className={`py-2 px-4 rounded`}

      >
        Toggle {} Mode
      </button>
    </div>
    )
}