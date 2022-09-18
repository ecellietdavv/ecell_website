import React from 'react'

const Initiativemobile = () => {
    const initiatvmob = [
        {
          name: "Thinkers Cafe",
          img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae sint sapiente soluta, id hic rem praesentium culpa necessitatibus distinctio doloribus aliquam."
        },
        {
          name: "Thinkers Cafe",
          img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae sint sapiente soluta, id hic rem praesentium culpa necessitatibus distinctio doloribus aliquam."
        },
        {
          name: "Thinkers Cafe",
          img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae sint sapiente soluta, id hic rem praesentium culpa necessitatibus distinctio doloribus aliquam."
        },
      ]

  return (
    <>
    {initiatvmob?.map((value,idx) => {
                    return(
                        <a href="#" class="flex flex-col items-center bg-light rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-light dark:border-dark dark:bg-dark dark:hover:bg-mid" key={idx}>
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={value.img} alt={value.name}/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark dark:text-light">{value.name}</h5>
                            <p class="mb-3 font-normal text-dark dark:text-light">{value.desc}</p>
                        </div>
                        </a>
                    )
                })}

    </>
  )
}

export default Initiativemobile
