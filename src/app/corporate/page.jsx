import ConnectTalent from "@/components/LandingPageComponents/ConnectTalent"
import CorporateGallary from "@/components/LandingPageComponents/CorporateGallary"
import EdtechGraduates from "@/components/LandingPageComponents/EdtechGraduates"
import EdtechRoles from "@/components/LandingPageComponents/EdtechRoles"
import Hire from "@/components/LandingPageComponents/Hire"
import Navbar from "@/components/LandingPageComponents/Navbar"
import Plan from "@/components/LandingPageComponents/Plan"
import ResponsiveWorkAt from "@/components/LandingPageComponents/ResponsiveWorkAt"
import StartHiring from "@/components/LandingPageComponents/StartHiring"
import WorkAt from "@/components/LandingPageComponents/WorkAt"

const Corporate = () => {
  return (
    <>
        <Navbar/>
        <Hire/>
        <ConnectTalent/>
        <EdtechGraduates/>
        <WorkAt/>
        <ResponsiveWorkAt/>
        <CorporateGallary/>
        <EdtechRoles/>
        <Plan/>
        <StartHiring/>
    </>
  )
}

export default Corporate