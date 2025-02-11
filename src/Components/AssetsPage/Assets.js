import React,{useState} from 'react'
import assets_banner from '../../assets/Assets image1.png'
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
import Banner from '../Banner/Banner.js'

const Assets = () => { 

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const assets = [
    { id: 1, name: "Dining Table", category: "Furniture", src: image9 },
    { id: 2, name: "Ceiling Fan", category: "Electronics", src: image10 },
    { id: 3, name: "Ceiling Light", category: "Electronics", src: image12 },
    { id: 4, name: "Sofa", category: "Furniture", src: image13 },
    { id: 5, name: "Sofa Chair", category: "Furniture", src: image14 },
    { id: 6, name: "L Shape Sofa", category: "Furniture", src: image15 },
    { id: 7, name: "Recliner", category: "Furniture", src: image16 },
    { id: 8, name: "Wooden Table", category: "Furniture", src: image17 },
    { id: 9, name: "Wooden Door", category: "Furniture", src: image18 },
  ];

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || asset.category === selectedCategory)
  );

  return (
    <div>
            {/* <div id="banner">
            <img className='banner_img' src={assets_banner} alt="main_banner" />

            <Navbar/>
            <div className="assets_banner_content">
                <p>Home - <span>Assets</span></p>
                <h1 className="abh">Assets</h1>
            </div>
            </div> */}

{/* <Banner page="assets" /> */}


     <div className="assets-container">
     <div className="carousel-header">
        <div className="carousel_head1">
        <h2>Assets</h2>
        <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
        </div>
        <div className="carousel_para">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
          nulla commodo dui, nec ultricies arcu nisi tristique eros.
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
          <div key={asset.id} className="asset-card">
            <img src={asset.src} alt={asset.name} />
            <h3>{asset.name}</h3>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{"..."}</button>
        <button>15</button>
        <button>{">"}</button>
      </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Assets