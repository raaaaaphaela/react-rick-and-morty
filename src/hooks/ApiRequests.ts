import {Card} from "../Card";
import axios from "axios";

export default function ApiRequests () {

    /* API calls */
    async function getCharacters(filter: string, page: number): Promise<Card[]> {
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character", {
                params: {
                    name: filter, page: page
                }
            });
            return response.data.results;
        } catch
            (e) {
            throw e;
        }
    }

    return {getCharacters};
}
