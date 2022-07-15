import { MDBRipple } from "mdb-react-ui-kit";
import { goToAuthor } from "../services/goToAuthor";
import { goToTitle } from "../services/goToTitle";

const endLink = "/full/843,/0/default.jpg";
const startLink = "https://www.artic.edu/iiif/2/";
//the artworkid  which is image_id comes from the json weve just used a promise to get
const artworkId = "fd26fe20-e8fd-d80a-c3e9-c07365b0db61";
const constructedLink = startLink + artworkId + endLink;
const retrieveArtworks =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,image_id&limit=100";
console.log(retrieveArtworks);
export function Card(props) {
  return (
    <MDBRipple
      className="bg-image hover-overlay shadow-1-strong rounded"
      style={{ maxWidth: "22rem" }}
      rippleTag="div"
      rippleColor="light"
    >
      <div className="">
        <a href="OpenCard">
          <img
            width="60%"
            height="20%"
            alt=" Book Title"
            src={constructedLink}
      
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
        <ul>
          {}
          <a href="./GoToAuthor">
            <li onClick={goToAuthor}>{props.authorName || "Author Name"}</li>
          </a>
          <a href="./GoToTitle">
            <li onClick={goToTitle}>{props.titleName || "Title Name"}</li>
          </a>
        </ul>
      </div>
    </MDBRipple>
  );
}
