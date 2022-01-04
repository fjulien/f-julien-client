import { Link } from "react-router-dom";
import { Button } from "antd";
import { PropsLinkButton } from "./LinkButton.model";

export default function LinkButton({
  url,
  text,
  color = "primary",
}: PropsLinkButton) {
  return (
    <Link to={url}>
      <Button type="primary">{text}</Button>
    </Link>
  );
}
