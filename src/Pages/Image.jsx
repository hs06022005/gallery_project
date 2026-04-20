import React from 'react'
import { useState ,useEffect} from 'react'
import useFetchImage from '../Component/Api'

const Image = () => {
    const [data, setData] = useState([])
    const [index, setIndex] = useState(1)
    const [loading, setLoading] = useState(true)

  useFetchImage(setData, setLoading,index)
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    }, [index]);

    const loadingData = () => {
      return (
          <div class="w-75 p-4 text-[1.2rem] rounded-4xl bg-white overflow-hidden grid shadow-[0_0_0_4px_#444,0_0_0_6px_white] relative">

              <div class="absolute inset-0 bg-[#444] origin-right animate-grow"></div>

              <div class="flex items-center justify-center font-bold text-2xl mix-blend-difference z-10">
                  Loading....
              </div>
          </div>
      )
    
  }

  const  Display=()=>{
    return data.map((elem,idx) => {
      return (
        <a href={elem.url} target="_blank" key={idx} className="border rounded shadow-md">
          <div className='h-auto w-auto flex flex-col justify-start items-center'>
            <div className='p-10 w-auto h-auto flex justify-start items-center'>
              <img src={elem.download_url} alt="" className='w-60 h-60 border-2 border-gray-500 rounded-2xl gap-4'/>
            </div>
            <h3 className='text-white font-bold mt-2 text-center'> {elem.author}</h3>
          </div>
        </a>
      )
    })
  }

  const button =()=>{
    return (
      <>
          <button className='bg-amber-400 text-black rounded p-2 m-10 w-20 cursor-pointer active:scale-95' 
            onClick={() => {
                if(index > 1) {
                    setIndex(index - 1);
                }
            }
            }
            >prev</button>

            <h3 className='text-xl flex items-center'>page {index}</h3>

            <button className='bg-amber-400 text-black rounded p-2 m-10 w-20 cursor-pointer active:scale-95' 
            onClick={() => setIndex(index + 1)}
            >next</button>
      </>
    )
  }


  return (
    <div className='bg-linear-to-br from-gray-900 to-black '> 
        <div className="absolute w-100 h-100 bg-pink-500 opacity-20 blur-3xl rounded-full -top-25 -left-25"></div>
        <div className="absolute w-100 h-100 bg-amber-400 opacity-20 blur-3xl rounded-full -bottom-25 -right-25"></div>

      <div className='rounded flex flex-wrap justify-center items-center my-15 pt-10  overflow-y-auto gap-4'> 
        {loading ? (loadingData()) :Display()}
      </div>


      <div className='flex justify-center items-center gap-6 pb-20  text-white w-full'>
            {button()}
        </div>
    </div>
  )
}

export default Image
