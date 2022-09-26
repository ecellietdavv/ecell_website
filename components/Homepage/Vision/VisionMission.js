import React, { useContext } from 'react'
import Image from 'next/image'
import { urlFor } from '../../../utils/sanity'
import ContentModal from './ContentModal'
import AppContext from '../../../context/AppContext'

function VisionMission({ content, id }) {
    const { vision, mission, e_networking, incubation_center, nec } = content

    const appContext = useContext(AppContext)
    const { openModal, handleModal } = appContext

    const ContentCard = ({ img, body, name, halfWidth = false }) => {
        const content = { name: name, body: body }
        return (
            <div onClick={()=>handleModal(content)} className={halfWidth ? "w-full cursor-pointer sm:w-1/2 relative group p-2" : "w-full cursor-pointer sm:w-full relative group p-2"}>
                <div className="relative">
                    <Image loading="lazy" height={400} width={600} alt={name} className={`block absolute object-cover object-center w-full h-full rounded-lg`}
                        src={img} />
                    <div className="bg-black rounded-lg bg-opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>
                </div>
                <div className="absolute z-20 text-white top-0 left-0 w-full flex flex-col justify-center items-center h-full px-10">
                    <h3 className='text-xl font-semibold text-center'>{name}</h3>
                </div>
            </div>
        )
    }

    return (
        <section id={id} className="bg-light dark:bg-dark">
            {openModal && <ContentModal />}
            <div className="container px-5 py-10 mx-auto lg:px-24 max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="Incubation Center" body={incubation_center?.body} img={urlFor(incubation_center?.img).url()} halfWidth={true} />
                        <ContentCard name="Mission" body={mission?.body} img={urlFor(mission?.img).url()} halfWidth={true} />
                        <ContentCard name="Vision" body={vision?.body} img={urlFor(vision?.img).url()} halfWidth={false} />
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <ContentCard name="E-Networking" body={e_networking?.body} img={urlFor(e_networking?.img).url()} halfWidth={false} />
                        <ContentCard name="NEC" body={nec?.body} img={urlFor(nec?.img).url()} halfWidth={true} />
                        <ContentCard name="NEC" body={nec?.body} img={urlFor(nec?.img).url()} halfWidth={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission