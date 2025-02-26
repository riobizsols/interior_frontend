
import React, {useState} from "react";
import Basic_Info from "./Basic_Infor";
import Usages from "./Usages";


const BookingDesign = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return(
        <div>
            <Basic_Info setSelectedImage={setSelectedImage}/>
            <Usages setSelectedImage={setSelectedImage}/>
        </div>
    )
}
export default BookingDesign;


