import React,{useState} from 'react'
// import assets_banner from '../../assets/Assets image1.png'
import { Link } from 'react-router-dom'
import "../AssetsPage/Assets.js"
import '../AssetsPage/Assets.css'
import Footer from '../Footer/Footer'
import image9 from "../../assets/Pngtrer.png"
import image10 from "../../assets/download1.png"
import image11 from "../../assets/Pngtree.png"
import image12 from "../../assets/11444629.png"
import image13 from "../../assets/closed-door-png-transparent-images.png"
import image14 from "../../assets/GoldenBackground.png"
import image15 from "../../assets/pngegg1.png"
import image16 from "../../assets/pngwing.com1.png"
import image17 from "../../assets/scsac1.png"
import image18 from "../../assets/vdsdvd1.png"
// import redsmallchair from '../../assets/Assets_design/red.png'
// import goldsmallchair from '../../assets/Assets_design/gold.png'
// import bluesmallchair from '../../assets/Assets_design/blue.png'
// import pinksmallchair from '../../assets/Assets_design/pink.png'
// import greysmallchair from '../../assets/Assets_design/grey.png'
//import greychair from '../../assets/Assets_design/assetschair.png'
 //import redchair from '../../assets/Assets_design/red_chair.png'
// import bluechair from '../../assets/Assets_design/bluechair.png'
// import goldchair from '../../assets/Assets_design/goldchair.png'
// import pinkchair from '../../assets/Assets_design/pinkchair.png'
import Banner from '../Banner/Banner.js'

const Assets = () => { 

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const assets = [
    { id: 1, name: "Dining Table", category: "Furniture", src: image9, smallImages: [image9, "/Assets_design/dinning table/dinning-table-1.webp", "/Assets_design/dinning table/dinning-table-2.webp", "/Assets_design/dinning table/dinning-table-3.webp", "/Assets_design/dinning table/dinning-table-4.webp"],mainImages: [ "/Assets_design/dinning table/dinning-table-1.webp", "/Assets_design/dinning table/dinning-table-2.webp", "/Assets_design/dinning table/dinning-table-3.webp", "/Assets_design/dinning table/dinning-table-4.webp"], },
    { id: 2, name: "Ceiling Fan", category: "Electronics", src: image16, smallImages: [image16, "/Assets_design/celing fan/celing_fan-1.webp", "/Assets_design/celing fan/celing_fan-2.webp", "/Assets_design/celing fan/celing_fan-3.webp", "/Assets_design/celing fan/celing_fan-4.webp"], mainImages: [ "/Assets_design/celing fan/celing_fan-1.webp", "/Assets_design/celing fan/celing_fan-2.webp", "/Assets_design/celing fan/celing_fan-3.webp", "/Assets_design/celing fan/celing_fan-4.webp"],},
    { id: 3, name: "Ceiling Light", category: "Electronics", src: image14, smallImages: [image14, "/Assets_design/celing light/celing-light-1.webp", "/Assets_design/celing light/celing-light-2.webp", "/Assets_design/celing light/celing-light-3.webp", "/Assets_design/celing light/celing-light-4.webp"], mainImages: ["/Assets_design/celing light/celing-light-1.webp", "/Assets_design/celing light/celing-light-2.webp", "/Assets_design/celing light/celing-light-3.webp", "/Assets_design/celing light/celing-light-4.webp"],},
    { id: 4, name: "Recliner", category: "Furniture", src: image18, smallImages: [image18, "/Assets_design/comfotable sofa_black_81x91.png", "/Assets_design/comfotable sofa_brown_81x91.png", "/Assets_design/comfotable sofa_green_81x91.png", "/Assets_design/comfotable sofa_navy_blue_81x91.png"], mainImages: ["/Assets_design/big-comfotable-sofa-green.webp", "/Assets_design/big-comfotable-sofa-brown.webp", "/Assets_design/big-comfotable-sofa-black.webp", "/Assets_design/big-comfotable-sofa-blue.webp",  ]},
    { id: 5, name: "Sofa Chair", category: "Furniture", src: image10, smallImages: ["/Assets_design/grey.png", "/Assets_design/gold.png", "/Assets_design/blue.png", "/Assets_design/red.png", "/Assets_design/pink.png"], mainImages: ["/Assets_design/assetschair.png", "/Assets_design/goldchair.png", "/Assets_design/bluechair.png", "/Assets_design/red_chair.png", "/Assets_design/pinkchair.png"] },
    { id: 6, name: "L Shape Sofa", category: "Furniture", src: image15, smallImages: [image15, "/Assets_design/L-shape/l-shape-1.webp", "/Assets_design/L-shape/l-shape-2.webp", "/Assets_design/L-shape/l-shape-3.webp", "/Assets_design/L-shape/l-shape-4.webp"], mainImages: [ "/Assets_design/L-shape/l-shape-1.webp", "/Assets_design/L-shape/l-shape-2.webp", "/Assets_design/L-shape/l-shape-3.webp", "/Assets_design/L-shape/l-shape-4.webp"],},
    { id: 7, name: "Sofa", category: "Furniture", src: image12, smallImages: [image12, "/Assets_design/sofa/normal-sofa-1.webp", "/Assets_design/sofa/normal-sofa-2.webp", "/Assets_design/sofa/normal-sofa-3.webp", "/Assets_design/sofa/normal-sofa-4.webp"], mainImages: [ "/Assets_design/sofa/normal-sofa-1.webp", "/Assets_design/sofa/normal-sofa-2.webp", "/Assets_design/sofa/normal-sofa-3.webp", "/Assets_design/sofa/normal-sofa-4.webp"], },
    { id: 8, name: "Wooden Table", category: "Furniture", src: image17, smallImages: [image17, "/Assets_design/wood table/wood-table-1.webp", "/Assets_design/wood table/wood-table-2.webp", "/Assets_design/wood table/wood-table-3.webp", "/Assets_design/wood table/wood-table-4.webp"],  mainImages: ["/Assets_design/wood table/wood-table-1.webp", "/Assets_design/wood table/wood-table-2.webp", "/Assets_design/wood table/wood-table-3.webp", "/Assets_design/wood table/wood-table-4.webp"],},
    { id: 9, name: "Wooden Door", category: "Furniture", src: image13, smallImages: [image13, "/Assets_design/wood door/wood-door-1.webp", "/Assets_design/wood door/wood-door-2.webp", "/Assets_design/wood door/wood-door-3.webp", "/Assets_design/wood door/wood-door-4.webp"], mainImages: ["/Assets_design/wood door/wood-door-1.webp", "/Assets_design/wood door/wood-door-2.webp", "/Assets_design/wood door/wood-door-3.webp", "/Assets_design/wood door/wood-door-4.webp"],},
  ];

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || asset.category === selectedCategory)
  );
console.log(filteredAssets)
  return (
    <div>
     <div className="assets-container">
     <div className="carousel-header">
        <div className="carousel_head1">
        <h2>Assets</h2>
        <h1>Discover elegance and comfort in every detail, every space.</h1>
        </div>
        <div className="carousel_para">
        <p>
        Explore a curated selection of premium furnishings and decor. From timeless classics to modern aesthetics, each piece is crafted for sophistication, seamlessly blending style with function, and enhancing your living space with exquisite charm.
        </p>
        </div>
      </div>
      <div className="filter-section">
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="assets-grid">
        {filteredAssets.map((asset) => (
          <div  className="asset-card">
            <Link
            key={asset.id}
            to="/assets-details"
            state={{src: asset.src, name: asset.name, category: asset.category, smallImages: asset.smallImages, mainImages: asset.mainImages}}
            >
            <img src={asset.src} alt={asset.name} />
            <h3>{asset.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{"..."}</button>
        <button>15</button>
        <button>{">"}</button>
      </div> */}
    </div>
    </div>
  )
}

export default Assets