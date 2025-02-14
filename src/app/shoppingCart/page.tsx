
import Image from 'next/image';
import bag1 from '../public/images/bag1.png';
import bag2 from '../public/images/bag2.png';
import bag3 from '../public/images/bag3.png';
import bag4 from '../public/images/bag4.png';
import bag5 from '../public/images/bag5.png';



export default function ShoppingCart (){


  return (

    <>
    <div className="min-h-screen bg-white  ">
      
      <main className="container mx-auto w-[718px] ">

        <h1 className="text-3xl font-bold ">Shopping Cart</h1>
     
        <div className="bg-white p-6  ">
       
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="col-span-2">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
        
            <div  className="grid grid-cols-5 gap-4 items-center mb-4">
              <div className="col-span-2 flex items-center space-x-4">
                <Image src={bag1} alt='product' width={83} height={87} className="object-cover" />
                <div>
                  <div className="font-bold"></div>
                  <div className="text-sm text-gray-500">Color: gray, Size: XL</div>
                </div>
              </div>
              <div></div>
              <div>
                <input type="number" className="w-16 p-2 border rounded" defaultValue={1} />
              </div>
            
            </div>
            <div  className="grid grid-cols-5 gap-4 items-center mb-4">
              <div className="col-span-2 flex items-center space-x-4">
                <Image src={bag2} alt='product' width={83} height={87} className="object-cover" />
                <div>
                  <div className="font-bold"></div>
                  <div className="text-sm text-gray-500">Color: Black, Size: XL</div>
                </div>
              </div>
              <div></div>
              <div>
                <input type="number" className="w-16 p-2 border rounded" defaultValue={1} />
              </div>
            
            </div>
            <div  className="grid grid-cols-5 gap-4 items-center mb-4">
              <div className="col-span-2 flex items-center space-x-4">
                <Image src={bag3} alt='product' width={83} height={87} className="object-cover" />
                <div>
                  <div className="font-bold"></div>
                  <div className="text-sm text-gray-500">Color: Red, Size: XL</div>
                </div>
              </div>
              <div></div>
              <div>
                <input type="number" className="w-16 p-2 border rounded" defaultValue={1} />
              </div>
            
            </div>
            <div  className="grid grid-cols-5 gap-4 items-center mb-4">
              <div className="col-span-2 flex items-center space-x-4">
                <Image src={bag4} alt='product' width={83} height={87} className="object-cover" />
                <div>
                  <div className="font-bold"></div>
                  <div className="text-sm text-gray-500">Color: White, Size: XL</div>
                </div>
              </div>
              <div></div>
              <div>
                <input type="number" className="w-16 p-2 border rounded" defaultValue={1} />
              </div>
            
            </div>
            <div  className="grid grid-cols-5 gap-4 items-center mb-4">
              <div className="col-span-2 flex items-center space-x-4">
                <Image src={bag5} alt='product' width={83} height={87} className="object-cover" />
                <div>
                  <div className="font-bold"></div>
                  <div className="text-sm text-gray-500">Color: Brown, Size: XL</div>
                </div>
              </div>
              <div></div>
              <div>
                <input type="number" className="w-16 p-2 border rounded" defaultValue={1} />
              </div>
            
            </div>
        
          
          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-none ">Update Cart</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-none">Clear Cart</button>
          </div>
        </div>
           


        <div className="grid grid-rows-2 gap-8 mt-8  ">
          <div className="bg-gray-100 rounded-md p-2 w-[371px] h-[284px] ">
            <h2 className="text-xl font-bold m-4">Cart Totals</h2>
            <div className="flex justify-between  mb-9">
              <span>Subtotals:</span>
              <span>£219.00</span>
            </div>
            <div className="flex justify-between mb-9">
              <span>Totals:</span>
              <span>£325.00</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-none w-[312px] h-[40px]   ">Proceed To Checkout</button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[371px] h-[274px]">
            <h2 className="text-xl font-bold mb-9">Calculate Shipping</h2>
            <div className="flex justify-between mb-9">
              <span>Shipping:</span>
              <span>£106.00</span>
            </div>
            <button className="bg-pink-500 text-white w-[179px] h-[41px] py-2 px-4 rounded-none w-full">Calculate Shipping</button>
          </div>
        </div>
        

      </main>
    </div>


</>
  );
};
    


