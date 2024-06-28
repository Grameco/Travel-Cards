import Card from "./card"

export default function Tours({tours, notInterested}) {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-[2rem] md:text-[3rem] text-[#672715] lg:text-[4rem] font-semibold ">Your Tour Guide</h1>
            <div className="flex flex-wrap gap-8 w-full justify-center">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} props = {tour} notInterested = {notInterested}/>
                    })
                }
            </div>
        </div>
    )
}