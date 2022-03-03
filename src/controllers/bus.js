import bus from "../data/bus.json"


class BusManager {


    static async getAllBus(req, res) {
        // try {
            // if (bus) {
                return res.status(200).json({ bus });
            // }
            // return res.status(400).json({ message: "No bus Found" });
        // } catch (error) {
        //     return res.status(500).json({ message: error.message });
        // }
    }

}

export default BusManager;
