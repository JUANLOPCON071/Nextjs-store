import Hero from "app/components/home/Hero/Hero";
import Description from "app/components/home/Description/Description";

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return(
        <div>
            <Hero/>
            <Description/>
            {children}
        </div>
    )
}