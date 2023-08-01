import { collection } from "firebase/firestore";
import { db } from "../init-firebase";

export const movieCollectionref = collection(db,"movies")