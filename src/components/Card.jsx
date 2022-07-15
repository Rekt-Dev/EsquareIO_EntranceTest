import { MDBRipple } from "mdb-react-ui-kit";
import { goToAuthor } from "../services/goToAuthor";
import { goToTitle } from "../services/goToTitle";

const startLink = "https://www.googleapis.com/books/v1/volumes?q=";
let searchQuery = "";
//the artworkid  which is image_id comes from the json weve just used a promise to get
const constructedLink = startLink + searchQuery + "intitle";

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
            width="90%"
            height="30%"
            alt=" Book Title"
            src={
              "https://books.google.com/books/content?id=_ojXNuzgHRcC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70jAbnovYhYAgBS2fMWQ42G2Q99zdUXmAZ5Q6A0EAitz5VlEN7gnWYzrRNEqKwPrWnqUZL_UGsBrrhEXsMJRHA2xOwqVuuGvf_G8DgKewXWot2KReoq8ZUvYrT4RAyXDPNQG_9Z&source=gbs_api"
            }
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
