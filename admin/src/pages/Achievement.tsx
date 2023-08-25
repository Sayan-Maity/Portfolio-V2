import axios from 'axios'
import { useState } from 'react'
import toast from "react-hot-toast";

const Achievement = () => {
    const [achievementDetail, setAchivementDetail] = useState("")
    const [achievementLink, setAchivementLink] = useState("")
    const [loading, setLoading] = useState(false)
    console.log("Achievement =>", achievementDetail)
    async function handleSubmitFormBtn(e: any) {
        setLoading(true)
        e.preventDefault()
        if (achievementDetail === "" || achievementLink === "") {
            toast.error("Please fill all the fields")
        } else {
            try {
                axios.post(`${import.meta.env.VITE_SERVER_URL_DEV}/postAchievement`,
                    { detail: achievementDetail, link: achievementLink }
                )
                    .then(() => {
                        toast.success("Achievement Added Successfully")
                        setLoading(false)
                        setAchivementDetail("")
                        setAchivementLink("")
                    })

            }
            catch (err) {
                console.log("Error =>", err)

            }
        }

    }

    return (
        <div>
            <h1>Achievement Section</h1>

            <form onSubmit={(e) => handleSubmitFormBtn(e)} style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "2rem", gap: "1rem" }}>
                <input type="text" value={achievementDetail} onChange={(e) => setAchivementDetail(e.target.value)} name="achievementDetail" id="achievementDetail" title="achievementDetail" placeholder='Describe your AchievementDetail' style={{ width: "90%", padding: "1rem" }} />
                <input type="text" value={achievementLink} onChange={(e) => setAchivementLink(e.target.value)} name="achievementLink" id="achievementLink" title="achievementLink" placeholder='Paste your Achievement Link' style={{ width: "90%", padding: "1rem" }} />

                <button type='submit'>{loading ? "Please Wait" : "Submit"}</button>
            </form>

        </div>
    )
}

export default Achievement
