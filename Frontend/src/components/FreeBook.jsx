import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json"   yha bhi ab backend se data lenge
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";


function FreeBook() {
    const [book,setBook]=useState([]);
    useEffect(()=>{
      const getFree=async()=>{
        try {
          const res=await axios.get("http://localhost:4001/book");
          // console.log(res.data.filter((data)=> data.subs==='Free'));
          setBook(res.data.filter((data)=> data.subs==='Free'));
        } catch (error) {
          console.log(error);
        }
      }
      getFree();
    })
    // const filterData=list.filter((data)=> data.subs==='Free');

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
      <div>
      <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
      <p>Explore our Free Books section where you can dive into captivating stories and insightful reads at no cost. From classics to contemporary gems, discover your next favorite book without spending a penny.</p>
      </div>
      
      <div>
      <Slider {...settings}>
        {book.map((item)=>(
             <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
    
  )
}

export default FreeBook
