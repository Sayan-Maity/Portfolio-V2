import { useEffect, useState } from "react"
import axios from "axios"
import { ExperienceItem } from "../types/FileTypes"

const Experience = () => {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]) 

  useEffect(() => {
    axios.get("http://localhost:3002/api/getExperience").then((res) => {
      setExperienceData(res.data)
      // console.log("inner =>", res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", width: "100%", gap: "2rem"}}>
      
      {/* <div style={{width: "100%"}}> */}
        {experienceData.map((experience, index) => {
            return (
                <div key={index} style={{width: "60%", border: "1px solid #d3d3d3", padding: "1rem 2rem"}}>
                    <img src={experience?.logoLink} alt={experience?.LogoName} height={80}/>
                    <p>{experience?.companyName}</p>
                    <p>{experience?.experienceDetails?.map((items) => {
                        return (
                            <p>{items}</p>
                        )
                    })}</p>
                    <p>{experience?.location}</p>
                    <p>{experience?.status}</p>
                    <p>{experience?.role}</p>
                    <p>{experience?.position}</p>
                    <p>{experience?.startDate}</p>
                    <p>{experience?.endDate}</p>
                    <p>{experience?.techStack?.map((items) => {
                        return (
                            <p>{items}</p>
                        )
                    })}</p>
                </div>
            )
        })}
      {/* </div> */}
      


    </div>
  )
}

export default Experience
