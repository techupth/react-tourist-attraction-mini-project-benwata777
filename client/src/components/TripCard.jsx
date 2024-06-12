// import React, { useState } from "react";
// import "../styles/TripCard.css";
// import "../KanitFont.css";

// function TripCard({ trip }) {
//   const { title, description, photos, url, tags } = trip;

//   const [showBigPhoto, setShowBigPhoto] = useState(false);
//   const [bigPhotoIndex, setBigPhotoIndex] = useState(0);

//   const shortDescription =
//     description.length > 100
//       ? description.substring(0, 100) + "..."
//       : description;

//   const handleTagClick = (tag) => {
//     document.getElementById("searchInput").value += ` ${tag}`;
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(url);
//   };

//   const toggleBigPhoto = (index) => {
//     setShowBigPhoto(!showBigPhoto);
//     setBigPhotoIndex(index);
//   };

//   const handleSmallPhotoClick = (index) => {
//     toggleBigPhoto(index + 1);
//   };

//   return (
//     <div className="trip-card">
//       <div className="photos">
//         <img src={photos[0]} alt={title} onClick={() => toggleBigPhoto(0)} />
//       </div>
//       <h2>
//         <a href={url} target="_blank" rel="noopener noreferrer">
//           {title}
//         </a>
//       </h2>
//       <p>{shortDescription}</p>
//       <a
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="read-more"
//       >
//         อ่านต่อ
//       </a>

//       <div className="tags">
//         {tags.map((tag) => (
//           <span key={tag} onClick={() => handleTagClick(tag)}>
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div className="small-photos">
//         {photos.slice(1, 4).map((photo, index) => (
//           <img
//             key={index}
//             src={photo}
//             alt={`${title}-${index}`}
//             onClick={() => handleSmallPhotoClick(index)}
//           />
//         ))}
//       </div>

//       <div className="trip-card-actions">
//         <button onClick={copyToClipboard}>Copy URL</button>
//       </div>

//       {showBigPhoto && (
//         <div className="big-photo-overlay" onClick={() => toggleBigPhoto(0)}>
//           <div className="big-photo-container">
//             <img src={photos[bigPhotoIndex]} alt={title} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TripCard;
import React, { useState } from "react";
import "../styles/TripCard.css"; // เรียกใช้ไฟล์ CSS สำหรับ TripCard
import "../KanitFont.css"; // เรียกใช้ไฟล์ CSS สำหรับฟ้อนต์ Kanit

function TripCard({ trip }) {
  const { title, description, photos, url, tags } = trip;

  const [showBigPhoto, setShowBigPhoto] = useState(false);
  const [bigPhotoIndex, setBigPhotoIndex] = useState(0);

  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const handleTagClick = (tag) => {
    document.getElementById("searchInput").value += ` ${tag}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  const toggleBigPhoto = (index) => {
    setShowBigPhoto(!showBigPhoto);
    setBigPhotoIndex(index);
  };

  const handleSmallPhotoClick = (index) => {
    toggleBigPhoto(index + 1);
  };

  return (
    <div className="trip-card">
      <div className="photos">
        <img src={photos[0]} alt={title} onClick={() => toggleBigPhoto(0)} />
      </div>
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{shortDescription}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more"
      >
        อ่านต่อ
      </a>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} onClick={() => handleTagClick(tag)}>
            {tag}
          </span>
        ))}
      </div>

      <div className="small-photos">
        {photos.slice(1, 4).map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`${title}-${index}`}
            onClick={() => handleSmallPhotoClick(index)}
          />
        ))}
      </div>

      <div className="trip-card-actions">
        <button onClick={copyToClipboard}>Copy URL</button>
      </div>

      {showBigPhoto && (
        <div className="big-photo-overlay" onClick={() => toggleBigPhoto(0)}>
          <div className="big-photo-container">
            <img src={photos[bigPhotoIndex]} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TripCard;
