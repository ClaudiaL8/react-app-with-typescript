import { Sub } from "../types";

//El tipo de las props
interface Props {
  //en caso de que quieras mandar un children
  // children: string;
  subs: Array<Sub>;
}

//({ subs }: Props) === (props: Props) const {subs} = props
export default function List({ subs }: Props) {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {sub.nick}(<small>{sub.subMonths}</small>)
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
}
