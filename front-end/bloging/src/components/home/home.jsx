import { HomeHeader } from "./home-header"
import { LatestBlogs } from "./home-topBlogs"
import { MiddlePart } from "./home-middle"
export function Home(){
    return(
        <>
        <HomeHeader/>
        <LatestBlogs/>
        <MiddlePart/>
        </>
    )
}