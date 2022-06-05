import axios from "axios";

export const watchLater = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
        await axios.post("/api/user/watchlater", { video }
            , { headers: { authorization: encodedToken } }
        )
    } catch (error) {
        console.log({ error })
    }
}