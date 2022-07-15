import { json } from "../services/json";
import { Card } from "./Card";
import {data1} from "./Header"
import {data} from "./Header"

export function Main() {
  return (
    <div>
      <div className="center">
        {json.map((obj) => (
          <div className="">
            <Card
              key={obj.id}
              authorName={obj.name}
              bookTitle={obj.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
