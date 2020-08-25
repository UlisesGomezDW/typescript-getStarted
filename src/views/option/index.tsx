import * as React from "react";
import { Props } from "./option.type";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Option: React.FC<Props> = ({ data }) => (
  <div className="list">
    {data.map((name, i) => (
      <ListItem key={i} button>
        <ListItemText primary={name} />
      </ListItem>
    ))}
  </div>
);

export default Option;
