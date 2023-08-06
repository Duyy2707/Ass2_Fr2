import { useGetProductsQuery } from "@/api/product";
// import { useAppDispatch } from "@/store/hook";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Home = () => {
    // const dispatch= useAppDispatch();
    const {data: products, error, isLoading: isHomeLoading} = useGetProductsQuery()

    if (isHomeLoading) return <Skeleton count={3} />;
    if (error) {
        if ("data" in error && "status" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(error.data)}
                </div>
            );
        }
    }
    return (
        <div>
            <div className="container mx-auto">
         <img className="w-[1400px] pl-16 py-7" src="/Rectangle (3).png" alt="" />
        <h1 className="text-xl py-6">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3 ">
        {products?.map((product: any) => (
                <div key={product.id} className="mb-3">
        <Link to={`/${product.id}/detail`}><img src={product.image} alt="" className="text-right w-[200px]" /></Link>
      
    <h4 className="mt-4 font-bold "><Link to={`/${product.id}/detail`}>{product.name}</Link>
        
      </h4>
    
      <p className="mt-2 font-mono font-bold text-red-500 float-left mr-2 text-xm">
        {product.price} ₫
      </p>
      <p className="text-gray-500 my-2 font-normal text-xm">
      {product.original_price} ₫
    </p>
      <div className="">
      <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star pr-2 pb-3"></i>
          <p className="float-right mr-32"> 1 đánh giá</p>
      </div>

                </div>
            ))}
            
      
        </div>
        <hr className="pb-10" />
    </div>
            

           
        </div>
    );
};

export default Home