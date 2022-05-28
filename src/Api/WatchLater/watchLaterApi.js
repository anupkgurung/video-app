import axios from "axios";

export const watchLater = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.post("/api/user/watchlater", { video }
            , { headers: { authorization: encodedToken } }
        )
    } catch (error) {
        console.log({ error })
    }
}