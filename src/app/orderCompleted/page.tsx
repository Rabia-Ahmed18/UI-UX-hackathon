export default function OrderCompleted (){
    return (
<>
<div className="w-[1920px] h-[287px] bg-[#E7E4F8] ">
 <div className="w-[400px] h-[62px] py-20 px-20 ">
  <h1 className="font-bold text-3xl justify-center mb-3 ">My Account</h1>
  <ul className="flex space-x-5 py-0 list-disc">
    <li className="hover:text-pink-500 ">Home</li>
    <li className="hover:text-pink-500">Pages</li>
    <li className="hover:text-pink-500">Order Completed</li>
  </ul>
 </div>  

</div>

<div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6  text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-600 rounded-full p-3 hover:bg-pink-500">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-black mb-4">Your Order Is Completed!</h2>
        <p className="text-gray-500 mb-4 leading-9">
          Thank you for your order! Your order is being processed and will be completed within 3-6 <br/>
                    hours. You will receive an email confirmation when your order is completed.
        </p>
        <button className="bg-pink-600 text-sm text-white px-6 py-2 w-[208px] h-[59px] hover:bg-pink-400">
          Continue Shopping
        </button>
      </div>
    </div>
 
</div>
</>
    )
}
